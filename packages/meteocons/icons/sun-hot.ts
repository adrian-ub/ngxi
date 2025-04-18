import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsSunHotIcon],svg[meteocons-sun-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsSunHot0"><svg:path fill="none" d="M0 0h512L0 512V0z"></svg:path></svg:clippath><svg:symbol id="meteoconsSunHot1" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsSunHot0)"><svg:use width="375" height="375" href="#meteoconsSunHot1" transform="translate(68.5 68.5)"></svg:use></svg:g><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"><svg:animate attributeName="d" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M197.48,355.79c11.43-12,24.46.42,35.89-11.58s-1.61-24.41,9.82-36.41,24.46.41,35.89-11.59-1.6-24.41,9.82-36.41,24.47.41,35.9-11.59-1.61-24.41,9.82-36.41,24.47.41,35.9-11.59; M195.1,353.28c11.42-12,28.8,4.56,40.23-7.44s-6-28.55,5.47-40.55,28.81,4.55,40.24-7.45-6-28.55,5.48-40.55,28.81,4.55,40.23-7.45-5.95-28.55,5.49-40.55,28.8,4.55,40.23-7.45; M197.48,355.79c11.43-12,24.46.42,35.89-11.58s-1.61-24.41,9.82-36.41,24.46.41,35.89-11.59-1.6-24.41,9.82-36.41,24.47.41,35.9-11.59-1.61-24.41,9.82-36.41,24.47.41,35.9-11.59"></svg:animate></svg:path><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"><svg:animate attributeName="d" begin="-.5s" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M257.48,355.79c11.43-12,24.46.42,35.89-11.58s-1.61-24.41,9.82-36.41,24.46.41,35.89-11.59-1.6-24.41,9.82-36.41,24.47.41,35.9-11.59-1.61-24.41,9.82-36.41,24.47.41,35.9-11.59; M255.1,353.28c11.42-12,28.8,4.56,40.23-7.44s-5.95-28.55,5.47-40.55,28.81,4.55,40.24-7.45-6-28.55,5.48-40.55,28.81,4.55,40.23-7.45-5.95-28.55,5.49-40.55,28.8,4.55,40.23-7.45; M257.48,355.79c11.43-12,24.46.42,35.89-11.58s-1.61-24.41,9.82-36.41,24.46.41,35.89-11.59-1.6-24.41,9.82-36.41,24.47.41,35.9-11.59-1.61-24.41,9.82-36.41,24.47.41,35.9-11.59"></svg:animate></svg:path>`,
})
export class MeteoconsSunHotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
