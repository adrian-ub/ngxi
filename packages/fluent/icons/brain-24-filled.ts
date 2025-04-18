import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBrain24FilledIcon],svg[fluent-brain-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.393 4.631a3.205 3.205 0 0 1 4.857-2.14v18.764a3.74 3.74 0 0 1-5.875-2.107l-.014-.003a4.106 4.106 0 0 1-1.372-7.558a3.24 3.24 0 0 1-.992-2.337v-.595a3.845 3.845 0 0 1 3.26-3.8l.098-.015zm6.357 16.624a3.74 3.74 0 0 0 5.875-2.107l.014-.003a4.106 4.106 0 0 0 1.37-7.559c.611-.59.991-1.419.991-2.336v-.595a3.845 3.845 0 0 0-3.26-3.8l-.098-.015l-.038-.209A3.205 3.205 0 0 0 12.75 2.49z"></svg:path>`,
})
export class FluentBrain24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
