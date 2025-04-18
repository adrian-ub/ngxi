import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiGitMergeSolidIcon],svg[mynaui-git-merge-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 6a3.75 3.75 0 1 1 4.527 3.67a8.25 8.25 0 0 0 7.554 7.553A3.751 3.751 0 0 1 21.75 18a3.75 3.75 0 0 1-7.43.727a9.75 9.75 0 0 1-7.57-4.529V21a.75.75 0 0 1-1.5 0V9.675A3.75 3.75 0 0 1 2.25 6"></svg:path>`,
})
export class MynauiGitMergeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
