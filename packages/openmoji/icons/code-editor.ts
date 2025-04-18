import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCodeEditorIcon],svg[openmoji-code-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M11 16.083h50v39.833H11z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M11 16.001h50v39.998H11z"></svg:path><svg:path d="M16.329 16.479v4.375H11h50m-32.167 9.541l-6.927 6.927m6.927 6.995l-6.927-6.928m16.278-9.237L32.809 46.25m9.35-1.998l6.927-6.928m-6.927-6.994l6.927 6.927"></svg:path></svg:g>`,
})
export class OpenmojiCodeEditorIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
