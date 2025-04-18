import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsForkGitIcon],svg[system-uicons-fork-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m14.5 3.5l3 3l-3 3"></svg:path><svg:path d="M17.5 6.5h-5l-4 5.086m6 .914l3 3l-3 3"></svg:path><svg:path d="M17.5 15.5h-5l-4-4h-6"></svg:path></svg:g>`,
})
export class SystemUiconsForkGitIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
