import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainIntellijIcon],svg[devicon-plain-intellij-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.906 5.484L4.961 51.848l11.45 3.83L6.276 74.434L23.49 88.027l-1.584 5.305l-7.508 26.293l35.852-12.957l24.55 15.85l45.083-18.057l2.105-67.781l-20.918 20.406v43.984H26.93V26.93h74.14v30.152l20.918-20.402L85.176 7.398L71.037 23.295l-10.83-13.287l-38.3-4.524zM27.93 27.93v72.14h72.14V27.93zm38.875 8.64h6.093v17.86a12.4 12.4 0 0 1-.668 4.254a7.92 7.92 0 0 1-4.964 4.879a12.1 12.1 0 0 1-4.036.632l.086.047a10.8 10.8 0 0 1-5.351-1.219a12.3 12.3 0 0 1-3.559-2.875l3.766-4.207c.687.778 1.484 1.45 2.367 2a4.85 4.85 0 0 0 2.621.73a3.46 3.46 0 0 0 2.668-1.058a5.07 5.07 0 0 0 .977-3.449zm-30.207.028h13.64v4.996h-3.816v17.261h3.816v5h-13.64v-5h3.824V41.594h-3.824zm-.051 50.148h27.43v4.574h-27.43z"></svg:path>`,
})
export class DeviconPlainIntellijIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
