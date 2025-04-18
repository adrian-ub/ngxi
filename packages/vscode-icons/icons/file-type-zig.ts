import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeZigIcon],svg[vscode-icons-file-type-zig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f7a41d" d="M5.733 19.731v-7.467h2.8V8.531H2v14.933h3.547l3.36-3.733zm20.72-11.2l-3.36 3.733h3.174v7.467h-2.8v3.733H30V8.531z"></svg:path><svg:path fill="#f7a41d" d="m26.875 6.707l-6.362 1.824H9.467v3.733h7.38L5.115 25.293l6.382-1.829h11.036v-3.733h-7.385z"></svg:path>`,
})
export class VscodeIconsFileTypeZigIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
