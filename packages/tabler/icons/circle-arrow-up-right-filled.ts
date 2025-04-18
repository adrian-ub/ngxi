import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleArrowUpRightFilledIcon],svg[tabler-circle-arrow-up-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M15 8H9l-.117.007A1 1 0 0 0 8 9l.007.117A1 1 0 0 0 9 10h3.584l-4.291 4.293l-.083.094a1 1 0 0 0 1.497 1.32L14 11.414V15l.007.117A1 1 0 0 0 16 15V9l-.007-.117l-.029-.149l-.035-.105l-.054-.113l-.071-.111a1 1 0 0 0-.097-.112l-.09-.08l-.096-.067l-.098-.052l-.11-.044l-.112-.03l-.126-.017z"></svg:path>`,
})
export class TablerCircleArrowUpRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
