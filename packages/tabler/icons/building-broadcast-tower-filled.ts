import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingBroadcastTowerFilledIcon],svg[tabler-building-broadcast-tower-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 10a2 2 0 0 1 1.497 3.327l2.452 7.357a1 1 0 1 1-1.898.632L13.611 20h-3.224l-.438 1.317a1 1 0 0 1-1.152.663l-.113-.03a1 1 0 0 1-.633-1.265l2.452-7.357A2 2 0 0 1 10 12l.005-.15A2 2 0 0 1 12 10"></svg:path><svg:path d="M18.093 4.078a10 10 0 0 1 3.137 11.776a1 1 0 0 1-1.846-.77a8 8 0 1 0-14.769 0a1 1 0 0 1-1.846.77A10 10 0 0 1 18.093 4.078"></svg:path><svg:path d="M15.657 7.243a6 6 0 0 1 1.882 7.066a1 1 0 1 1-1.846-.77a4 4 0 1 0-7.384 0a1 1 0 1 1-1.846.77a6 6 0 0 1 9.194-7.066"></svg:path></svg:g>`,
})
export class TablerBuildingBroadcastTowerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
