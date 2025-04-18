import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteGitlabSolidIcon],svg[flowbite-gitlab-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.701 10.126l-.025-.068l-2.45-6.64a.637.637 0 0 0-1.22.07l-1.654 5.255H8.653L7 3.488a.642.642 0 0 0-.967-.385a.66.66 0 0 0-.252.315l-2.455 6.637l-.024.067a4.9 4.9 0 0 0-.124 2.991a4.73 4.73 0 0 0 1.633 2.469l.008.006l.023.017l3.732 2.902l1.846 1.451l1.125.882a.74.74 0 0 0 .915 0l1.124-.882l1.847-1.45l3.755-2.92l.009-.008a4.73 4.73 0 0 0 1.63-2.466a4.9 4.9 0 0 0-.123-2.988"></svg:path>`,
})
export class FlowbiteGitlabSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
