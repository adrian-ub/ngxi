import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAutoStoriesSharpIcon],svg[material-symbols-light-auto-stories-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.962 18.73q-1.22-.834-2.6-1.282T6.5 17q-1.186 0-2.311.299T2 18.117V6.127q1.027-.58 2.17-.854Q5.314 5 6.5 5q1.47 0 2.85.452T12 6.654v10.869q1.23-.794 2.628-1.158Q16.025 16 17.5 16q.9 0 1.775.15t1.725.47V5.638q.275.098.528.207q.253.11.472.281v11.99q-1.063-.519-2.189-.818T17.5 17q-1.5 0-2.92.42t-2.618 1.31M14 15V6.5l5-5v9z"></svg:path>`,
})
export class MaterialSymbolsLightAutoStoriesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
