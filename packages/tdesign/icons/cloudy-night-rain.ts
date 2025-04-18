import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudyNightRainIcon],svg[tdesign-cloudy-night-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.131.901l-.102 1.185q-.017.194-.017.394a4.505 4.505 0 0 0 4.899 4.488l1.185-.102l-.103 1.184a6.5 6.5 0 0 1-2.162 4.3a5.2 5.2 0 0 1 1.186 3.309c0 2.212-1.383 4.085-3.316 4.898l-.921.388l-.776-1.844l.922-.387c1.25-.526 2.09-1.71 2.09-3.055c0-1.052-.51-2-1.332-2.62a3.6 3.6 0 0 0-2.172-.718h-.059l-.854.014l-.146-.842C15.17 9.87 13.9 8.535 12.215 8.118a4.6 4.6 0 0 0-1.172-.134c-2.438.034-4.34 1.938-4.34 4.205q0 .393.072.766l.184.956l-.95.21C4.833 14.38 4 15.38 4 16.526c0 .948.567 1.793 1.434 2.207l.902.432l-.864 1.804l-.902-.431C3.064 19.817 2 18.303 2 16.526c0-1.831 1.126-3.378 2.708-4.074a6 6 0 0 1-.005-.263c0-3.146 2.398-5.699 5.463-6.138a6.51 6.51 0 0 1 5.78-5.047zm-4.9 5.178q.234.041.463.097c2.15.531 3.883 2.122 4.538 4.19a5.6 5.6 0 0 1 2.045.676a4.5 4.5 0 0 0 1.5-2.099a6.51 6.51 0 0 1-5.723-5.722a4.52 4.52 0 0 0-2.823 2.858m.765 7.897H15v2.003h-2.004zm-4.996 2h2.004v2.003H8zm5 3h2.004v2.003H13zm-5 2h2.004v2.003H8z"></svg:path>`,
})
export class TdesignCloudyNightRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
