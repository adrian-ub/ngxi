import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeKivyIcon],svg[vscode-icons-file-type-kivy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeKivy0" x1="14.989" x2="15.124" y1="17.164" y2="17.091" gradientTransform="matrix(1 0 0 -1 0 34)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-opacity=".03"></svg:stop><svg:stop offset=".085" stop-color="#090909" stop-opacity=".027"></svg:stop><svg:stop offset=".224" stop-color="#212121" stop-opacity=".023"></svg:stop><svg:stop offset=".398" stop-color="#494949" stop-opacity=".018"></svg:stop><svg:stop offset=".603" stop-color="gray" stop-opacity=".012"></svg:stop><svg:stop offset=".83" stop-color="#c6c6c6" stop-opacity=".005"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs><svg:circle cx="16" cy="16" r="14" fill="#3f4142"></svg:circle><svg:path fill="#ebeded" d="m26.469 12.631l-8.992 1.019l4.146 4.14l4.948-4.942c.145-.148.097-.241-.102-.217m-6.196 5.129l-3.785-3.785l-3.007 5.665l2.441 2.441a1 1 0 0 0 .705.289a1 1 0 0 0 .705-.289l2.935-2.917a.98.98 0 0 0 .289-.7a.96.96 0 0 0-.283-.704"></svg:path><svg:path fill="#f9f9f9" d="M12.1 9.588v7.407a3.62 3.62 0 0 0 .892 2.158l.488.488l3.007-5.665Zm-4.194 9.486l3.266 3.266v-7.75l-3.266 3.266a.87.87 0 0 0 0 1.218m2.471-6.208L7.111 9.6v7.744l3.266-3.266a.86.86 0 0 0 0-1.212"></svg:path><svg:path fill="url(#vscodeIconsFileTypeKivy0)" d="m16.488 13.975l.115.115l-3.007 5.665l-.115-.115z"></svg:path>`,
})
export class VscodeIconsFileTypeKivyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
