import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHairClipIcon],svg[icon-park-outline-hair-clip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38.848 5.339c-6.964 1.228-14.584 6.88-17.534 14.58c-3.225 8.417-4.097 9.338-8.03 11.468C9.502 33.435 4.6 35.072 4.6 35.072"></svg:path><svg:path d="M9.638 33.107c4.22-2.54 9.708.083 12.165 1.804c2.457 1.72 4.956 1.64 6.39-.409s.656-4.424-1.801-6.144c-1.639-1.147-7.127-3.77-5.078-8.44"></svg:path><svg:path d="M43.189 9.6c-10.323 2.538-14.42 5.773-18.435 17.61m-3.77 7.127c-.778 1.693-2.295 5.718-2.131 8.274"></svg:path></svg:g>`,
})
export class IconParkOutlineHairClipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
