import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsProducthuntIcon],svg[lineicons-producthunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.322 9h-2.87v3h2.87c.807 0 1.517-.677 1.517-1.484c.032-.87-.71-1.516-1.517-1.516"></svg:path><svg:path fill="currentColor" d="M12 2C6.452 2 2 6.452 2 12s4.452 10 10 10s10-4.452 10-10S17.548 2 12 2m1.323 12h-2.871v3h-2V7h4.87a3.484 3.484 0 0 1 3.517 3.516C16.87 12.452 15.259 14 13.323 14"></svg:path>`,
})
export class LineiconsProducthuntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
