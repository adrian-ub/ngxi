import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalIntellijIcon],svg[devicon-original-intellij-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconOriginalIntellij0" x1="11.16" x2="58.94" y1="59.21" y2="56.78" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset=".09" stop-color="#fc801d"></svg:stop><svg:stop offset=".23" stop-color="#b07f61"></svg:stop><svg:stop offset=".41" stop-color="#577db3"></svg:stop><svg:stop offset=".53" stop-color="#1e7ce6"></svg:stop><svg:stop offset=".59" stop-color="#087cfa"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconOriginalIntellij1" x1="89.05" x2="73.12" y1="54.12" y2="6.52" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fe2857"></svg:stop><svg:stop offset=".08" stop-color="#cb3979"></svg:stop><svg:stop offset=".16" stop-color="#9e4997"></svg:stop><svg:stop offset=".25" stop-color="#7557b2"></svg:stop><svg:stop offset=".34" stop-color="#5362c8"></svg:stop><svg:stop offset=".44" stop-color="#386cda"></svg:stop><svg:stop offset=".54" stop-color="#2373e8"></svg:stop><svg:stop offset=".66" stop-color="#1478f2"></svg:stop><svg:stop offset=".79" stop-color="#0b7bf8"></svg:stop><svg:stop offset="1" stop-color="#087cfa"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconOriginalIntellij2" x1="18.72" x2="78.8" y1="26.61" y2="125.99" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fe2857"></svg:stop><svg:stop offset=".08" stop-color="#fe295f"></svg:stop><svg:stop offset=".21" stop-color="#ff2d76"></svg:stop><svg:stop offset=".3" stop-color="#ff318c"></svg:stop><svg:stop offset=".38" stop-color="#ea3896"></svg:stop><svg:stop offset=".55" stop-color="#b248ae"></svg:stop><svg:stop offset=".79" stop-color="#5a63d6"></svg:stop><svg:stop offset="1" stop-color="#087cfa"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconOriginalIntellij0)" d="M23.492 88.027L6.277 74.434L16.41 55.676l15.223 5.094Zm0 0"></svg:path><svg:path fill="#087cfa" d="m121.988 36.68l-2.105 67.78L74.8 122.517l-24.55-15.849Zm0 0"></svg:path><svg:path fill="url(#deviconOriginalIntellij1)" d="M121.988 36.68L99.68 58.44L71.035 23.297l14.14-15.899Zm0 0"></svg:path><svg:path fill="url(#deviconOriginalIntellij2)" d="m50.25 106.668l-35.852 12.957l7.508-26.293l9.727-32.562L4.96 51.848L21.906 5.484l38.301 4.524L99.68 58.44Zm0 0"></svg:path><svg:path d="M27.43 27.43h73.14v73.14H27.43Zm0 0"></svg:path><svg:path fill="#fff" d="M36.547 86.746h27.43v4.574h-27.43Zm13.691-45.152v-4.996h-13.64v4.996h3.824v17.261h-3.824v5h13.64v-5h-3.816V41.594Zm13.078 22.648a10.802 10.802 0 0 1-5.351-1.219a12.299 12.299 0 0 1-3.559-2.875l3.766-4.207c.687.778 1.484 1.45 2.367 2a4.849 4.849 0 0 0 2.621.73a3.46 3.46 0 0 0 2.668-1.058a5.07 5.07 0 0 0 .977-3.449V36.57h6.093v17.86a12.384 12.384 0 0 1-.668 4.254a7.919 7.919 0 0 1-4.964 4.879a12.097 12.097 0 0 1-4.036.632"></svg:path>`,
})
export class DeviconOriginalIntellijIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
