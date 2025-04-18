import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsDialogflowIcon],svg[lineicons-dialogflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.053L3.935 8.02v6.815c-.001.154.07.3.191.394L8.804 18a.32.32 0 0 1 .172.293v3.539a.172.172 0 0 0 .262.141l10.596-6.745a.5.5 0 0 0 .232-.424V8.02z"></svg:path><svg:path fill="currentColor" d="m12 10.036l8.066-4.033l-7.945-3.972a.25.25 0 0 0-.242 0L3.935 6.003z"></svg:path>`,
})
export class LineiconsDialogflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
