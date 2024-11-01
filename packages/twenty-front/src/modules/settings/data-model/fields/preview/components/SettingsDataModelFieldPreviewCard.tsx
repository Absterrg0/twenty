import styled from '@emotion/styled';

import {
  SettingsDataModelFieldPreview,
  SettingsDataModelFieldPreviewProps,
} from '@/settings/data-model/fields/preview/components/SettingsDataModelFieldPreview';
import { SettingsDataModelObjectSummary } from '@/settings/data-model/objects/components/SettingsDataModelObjectSummary';
import { Card, CardContent } from 'twenty-ui';

export type SettingsDataModelFieldPreviewCardProps =
  SettingsDataModelFieldPreviewProps & {
    className?: string;
  };

const StyledCard = styled(Card)`
  border-radius: ${({ theme }) => theme.border.radius.md};
  color: ${({ theme }) => theme.font.color.primary};
`;

const StyledCardContent = styled(CardContent)`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const SettingsDataModelFieldPreviewCard = ({
  className,
  fieldMetadataItem,
  objectMetadataItem,
  relationObjectMetadataItem,
  shrink,
  withFieldLabel = true,
}: SettingsDataModelFieldPreviewCardProps) => (
  <StyledCard className={className} fullWidth>
    <StyledCardContent>
      <SettingsDataModelObjectSummary objectMetadataItem={objectMetadataItem} />
      <SettingsDataModelFieldPreview
        objectMetadataItem={objectMetadataItem}
        fieldMetadataItem={fieldMetadataItem}
        relationObjectMetadataItem={relationObjectMetadataItem}
        shrink={shrink}
        withFieldLabel={withFieldLabel}
      />
    </StyledCardContent>
  </StyledCard>
);
