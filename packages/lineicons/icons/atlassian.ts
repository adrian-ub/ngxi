import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsAtlassianIcon],svg[lineicons-atlassian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.892 11.255c-.322-.322-.773-.322-.966.097L2.06 21.114c-.193.354.097.87.548.87h6.797a.62.62 0 0 0 .548-.323c1.45-3.06.548-7.668-2.062-10.406M11.5 2.331c-4.704 7.539-.323 13.563 2.545 19.33a.62.62 0 0 0 .548.322h6.797a.602.602 0 0 0 .548-.87s-9.116-18.33-9.342-18.781c-.29-.42-.838-.42-1.095 0"></svg:path>`,
})
export class LineiconsAtlassianIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
