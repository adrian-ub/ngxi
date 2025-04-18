import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVoxelIcon],svg[token-branded-voxel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedVoxel0)" d="m10.625 15.775l.55-7.275c-1.65 0-3.835 1.515-4.675 2.275v3.75C7.05 17.7 10.4 20.165 12 21v-2.615c-.46-.27-1.375-1.93-1.375-2.61"></svg:path><svg:path fill="url(#tokenBrandedVoxel1)" d="m13.375 15.775l-.55-7.275c1.65 0 3.835 1.515 4.675 2.275v3.75C16.95 17.7 13.6 20.165 12 21v-2.615c.46-.27 1.375-1.93 1.375-2.61"></svg:path><svg:path fill="#F5C700" d="M12 6.78L9 8l-.5-.5c.584-.3 1.88-.88 2.405-1.055c.524-.18.594-1.53.594-2.195c-.175-.18-.25-.39-.25-.5c0-.535.53-.75.75-.75z"></svg:path><svg:path fill="#EFBB1E" d="M12 6.78L15 8l.5-.5a27 27 0 0 0-2.405-1.055c-.526-.18-.596-1.53-.596-2.195c.175-.18.25-.39.25-.5c0-.535-.53-.75-.75-.75z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedVoxel0" x1="12" x2="12" y1="8.5" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0E2C5E"></svg:stop><svg:stop offset="1" stop-color="#16448F"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedVoxel1" x1="12" x2="12" y1="8.5" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0E2C5E"></svg:stop><svg:stop offset="1" stop-color="#16448F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedVoxelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
