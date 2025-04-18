import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftDesignerIcon],svg[arcticons-microsoft-designer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.625 23.992C12.609 23.982 8.055 16.698 7.93 8.1c-.026-1.67 1.142-2.6 2.6-2.6h11.68c9.112 0 17.544 7.513 17.861 18.5c-.317 10.99-8.75 18.5-17.865 18.5H10.53c-1.458 0-2.626-.93-2.6-2.6c.125-8.594 4.68-15.881 14.694-15.892L27.326 24a8.704 8.704 0 0 1 8.73 8.677v2.866"></svg:path>`,
})
export class ArcticonsMicrosoftDesignerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
