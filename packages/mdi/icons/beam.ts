import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBeamIcon],svg[mdi-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm9.365 10.817A16.655 16.655 0 0 1 11.183 2.635c5.823-.501 10.684 4.355 10.182 10.182zM9.172 9.172a4 4 0 1 1 5.656 5.656a4 4 0 0 1-5.656-5.656zm-6.537 2.01a16.655 16.655 0 0 1 10.182 10.183c-5.83.502-10.683-4.362-10.182-10.182z" fill="currentColor"></svg:path>`,
})
export class MdiBeamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
