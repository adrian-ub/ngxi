import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationBatteryFullIcon],svg[foundation-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M95.582 41.448h-7.796V24.341c0-.956-.775-1.731-1.733-1.731H4.418c-.957 0-1.732.775-1.732 1.731v51.318a1.73 1.73 0 0 0 1.732 1.731h81.635c.957 0 1.732-.775 1.732-1.731v-18.62h7.796c.957 0 1.732-.775 1.732-1.732V43.18a1.73 1.73 0 0 0-1.731-1.732M77.829 67.434H12.862V32.785h64.967z"></svg:path><svg:path fill="currentColor" d="M17.84 37.382h55.01v25.074H17.84z"></svg:path>`,
})
export class FoundationBatteryFullIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
