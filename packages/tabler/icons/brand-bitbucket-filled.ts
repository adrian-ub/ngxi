import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandBitbucketFilledIcon],svg[tabler-brand-bitbucket-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.661 3l16.68.007c.484-.005.946.203 1.262.57c.316.368.454.856.364 1.396l-3.338 14.651A1.64 1.64 0 0 1 17 21H6.99c-.906-.009-1.678-.668-1.82-1.517L2.022 4.907A1.64 1.64 0 0 1 3.661 3M15 8H9a1 1 0 0 0-.986 1.164l1 6A1 1 0 0 0 10 16h4a1 1 0 0 0 .986-.836l1-6A1 1 0 0 0 15 8"></svg:path>`,
})
export class TablerBrandBitbucketFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
