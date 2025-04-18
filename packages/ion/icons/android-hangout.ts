import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionAndroidHangoutIcon],svg[ion-android-hangout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c-97.321 0-176 77.114-176 172.487 0 95.38 78.679 172.487 176 172.487V464c100.425-47.689 176-152.195 176-243.513C432 125.114 353.321 48 256 48zm-10 182.633L224.943 271H193.88l20.712-40H184v-61h62v60.633zm82 0L307.768 271h-31.063l20.704-40H266v-61h62v60.633z" fill="currentColor"></svg:path>`,
})
export class IonAndroidHangoutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
