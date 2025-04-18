import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinNotebookIcon],svg[vaadin-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v1h-.52a.48.48 0 0 0-.48.48a.48.48 0 0 0 .478.52H2v1h-.52a.48.48 0 0 0-.48.48a.48.48 0 0 0 .478.52H2v1h-.52a.48.48 0 0 0-.48.48a.48.48 0 0 0 .478.52H2v1h-.52a.48.48 0 0 0-.48.48a.48.48 0 0 0 .478.52H2v1h-.52a.48.48 0 0 0 0 .96H2v1h-.52a.48.48 0 0 0 0 .96H2v1h-.52a.48.48 0 0 0 0 .96H2v2h12V0zm1.5 14a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M12 6H6V3h6z"></svg:path>`,
})
export class VaadinNotebookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
