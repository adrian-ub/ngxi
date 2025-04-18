import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonAngryIcon],svg[mdi-emoticon-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 9.5V8l3 1.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5m7.77 7.73C14.32 16.5 13.25 16 12 16s-2.32.5-2.77 1.23l-1.42-1.42C8.71 14.72 10.25 14 12 14s3.29.72 4.19 1.81zM17 9.5c0 .8-.7 1.5-1.5 1.5S14 10.3 14 9.5L17 8z"></svg:path>`,
})
export class MdiEmoticonAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
