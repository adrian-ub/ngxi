import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGitDiffDuotoneIcon],svg[ph-git-diff-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24m120 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M112 152a8 8 0 0 0-8 8v28.69L66.34 151a8 8 0 0 1-2.34-5.63V95a32 32 0 1 0-16 0v50.38a23.85 23.85 0 0 0 7 17L92.69 200H64a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8M40 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m168 97v-50.37a23.85 23.85 0 0 0-7-17L163.31 56H192a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0V67.31L189.66 105a8 8 0 0 1 2.34 5.66V161a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGitDiffDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
