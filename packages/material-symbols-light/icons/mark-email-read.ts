import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkEmailReadIcon],svg[material-symbols-light-mark-email-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.489 21.27l-3.558-3.558l.708-.708l2.85 2.85l5.688-5.688l.708.707zM4.615 19q-.67 0-1.143-.472Q3 18.056 3 17.385V6.615q0-.67.472-1.143Q3.944 5 4.616 5h14.769q.67 0 1.143.472q.472.472.472 1.144v4.926l-5.506 5.487l-2.855-2.856l-3.533 3.533L10.4 19zM12 12.116l8-5.231L19.692 6L12 11L4.308 6L4 6.885z"></svg:path>`,
})
export class MaterialSymbolsLightMarkEmailReadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
