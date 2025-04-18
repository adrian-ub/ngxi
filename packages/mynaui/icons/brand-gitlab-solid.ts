import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandGitlabSolidIcon],svg[mynaui-brand-gitlab-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.168 2.645a.75.75 0 0 0-1.39.184L2.27 13.537a.75.75 0 0 0 .257.753l8.982 7.292a.75.75 0 0 0 .944.001l9.019-7.292a.75.75 0 0 0 .258-.754L19.228 2.829a.75.75 0 0 0-1.41-.145l-2.814 6.063H9.445z"></svg:path>`,
})
export class MynauiBrandGitlabSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
