import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainKibanaIcon],svg[devicon-plain-kibana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0v48c2.323 0 4.624.086 6.906.244A99 99 0 0 0 12 48v67.152l47.73-54.96a99 99 0 0 0-6.1-3.057a101 101 0 0 1 6.1 3.053L112 0zm7.44 48.287a99 99 0 0 1 6.466.695a99 99 0 0 0-6.467-.695zm7.027.777q3.288.482 6.504 1.174a99 99 0 0 0-6.504-1.174m6.838 1.245a99 99 0 0 1 13.232 3.882a99 99 0 0 0-13.232-3.882m13.857 4.12q2.974 1.126 5.856 2.43a99 99 0 0 0-5.856-2.43M70.04 66.622l-48.973 56.406L16.738 128h93.258c-5.12-25.21-19.758-46.945-39.957-61.379z"></svg:path>`,
})
export class DeviconPlainKibanaIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
