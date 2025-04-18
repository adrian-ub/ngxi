import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonConfusedIcon],svg[mdi-emoticon-confused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2M8.5 8A1.5 1.5 0 1 1 7 9.5A1.54 1.54 0 0 1 8.5 8m8.5 8h-4a4 4 0 0 0-3.47 2L7.8 17a6 6 0 0 1 5.2-3h4m-1.5-3A1.5 1.5 0 1 1 17 9.5a1.54 1.54 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiEmoticonConfusedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
