import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudBeaker16FilledIcon],svg[fluent-cloud-beaker-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a4 4 0 0 0-3.97 3.507A3.25 3.25 0 0 0 4.25 12h4.533l1.103-2.13a1 1 0 0 0 .112-.46V7.914A1.5 1.5 0 0 1 10.5 5h1.374A4 4 0 0 0 8 2m5.996 7.405a2 2 0 0 0 .224.92l.35.675h-4.143l.347-.67a2 2 0 0 0 .224-.92V7H10.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-.504zM9.909 12l-.798 1.54A1 1 0 0 0 10 15h4.998a1 1 0 0 0 .888-1.46L15.087 12z"></svg:path>`,
})
export class FluentCloudBeaker16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
