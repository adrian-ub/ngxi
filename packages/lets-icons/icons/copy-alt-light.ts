import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCopyAltLightIcon],svg[lets-icons-copy-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M15 3H9a4 4 0 0 0-4 4v8"></svg:path><svg:path d="M8.5 11.5c0-1.184 0-2.03.074-2.684c.073-.643.21-1.035.443-1.338a2.5 2.5 0 0 1 .461-.461c.303-.232.696-.37 1.338-.443c.653-.073 1.5-.074 2.684-.074s2.03 0 2.684.074c.642.073 1.035.21 1.338.443q.26.2.461.461c.232.303.37.695.443 1.338c.073.653.074 1.5.074 2.684v4c0 1.184 0 2.03-.074 2.684c-.073.642-.21 1.035-.443 1.338a2.5 2.5 0 0 1-.461.461c-.302.232-.695.37-1.338.443c-.653.073-1.5.074-2.684.074s-2.03 0-2.684-.074c-.643-.073-1.035-.21-1.338-.443a2.5 2.5 0 0 1-.461-.461c-.232-.302-.37-.695-.443-1.338c-.073-.653-.074-1.5-.074-2.684z"></svg:path></svg:g>`,
})
export class LetsIconsCopyAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
