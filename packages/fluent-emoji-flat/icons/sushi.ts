import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatSushiIcon],svg[fluent-emoji-flat-sushi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F4F4F4" d="M10.33 19.18h15.32c1.53 0 2.76-1.23 2.76-2.76v-3.4H7.57v3.4a2.76 2.76 0 0 0 2.76 2.76M6.32 29.97h15.32a2.76 2.76 0 0 0 2.76-2.76v-3.32H3.56v3.32a2.76 2.76 0 0 0 2.76 2.76"></svg:path><svg:path fill="#FF6723" d="M24.83 6H11.15c-2.84 0-5.14 2.3-5.14 5.14v.36c0 .85.69 1.54 1.54 1.54h20.88c.85 0 1.54-.69 1.54-1.54v-.36C29.98 8.3 27.67 6 24.83 6"></svg:path><svg:path fill="#FF822D" d="M12.38 9.6c-.4 0-.72-.32-.72-.72V6h1.44v2.88c0 .4-.32.72-.72.72m5.61 0c-.4 0-.72-.32-.72-.72V6h1.44v2.88c0 .4-.32.72-.72.72m4.9-.72c0 .4.32.72.72.72c.39 0 .71-.32.72-.72V6h-1.44z"></svg:path><svg:path fill="#F8312F" d="M20.82 17H7.14C4.3 17 2 19.3 2 22.14v.24c0 .85.69 1.54 1.54 1.54h20.88c.85 0 1.54-.69 1.54-1.54v-.24c.01-2.84-2.3-5.14-5.14-5.14"></svg:path><svg:path fill="#FF8687" d="M8.37 20.6c-.4 0-.72-.32-.72-.72V17h1.44v2.88c0 .4-.32.72-.72.72m5.61 0c-.4 0-.72-.32-.72-.72V17h1.44v2.88c0 .4-.32.72-.72.72m4.9-.72c0 .4.32.72.72.72c.39 0 .71-.32.72-.72V17h-1.44z" opacity=".6"></svg:path></svg:g>`,
})
export class FluentEmojiFlatSushiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
