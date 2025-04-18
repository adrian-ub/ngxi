import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStorageCardOneIcon],svg[icon-park-storage-card-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M33.7778 4H15.7778V12H33.7778V4Z"></svg:path><svg:path stroke-linecap="round" d="M15.3661 4H10.7778C9.67326 4 8.77783 4.89543 8.77783 6V42C8.77783 43.1046 9.67326 44 10.7778 44H38.7778C39.8824 44 40.7778 43.1046 40.7778 42V6C40.7778 4.89543 39.8824 4 38.7778 4H34.1896"></svg:path><svg:path stroke-linecap="round" d="M27.7775 20L19.7778 28.0012H29.7818L21.7781 36.0018"></svg:path></svg:g>`,
})
export class IconParkStorageCardOneIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
