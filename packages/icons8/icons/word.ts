import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8WordIcon],svg[icons8-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm10 7v6.5c0 .217-.283.5-.5.5c-.042 0 .02.048-.063-.063c-.082-.11-.206-.388-.28-.687C17.006 17.652 17 17 17 17v-2h-2v4.5c0 .217-.283.5-.5.5s-.5-.283-.5-.5V13h-4v2h2v4.5c0 1.383 1.117 2.5 2.5 2.5c.984 0 1.686-.644 2.094-1.47c.302.187.52.47.906.47c1.383 0 2.5-1.117 2.5-2.5V14h2v-2z"></svg:path>`,
})
export class Icons8WordIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
