import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsCmakeLightIcon],svg[skill-icons-cmake-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F4ED" rx="60"></svg:rect><svg:path fill="url(#skillIconsCmakeLight0)" stroke="#000" d="m136.356 129.131l-99.812 85.328l91.419-182.666z"></svg:path><svg:path fill="url(#skillIconsCmakeLight1)" stroke="#000" d="M140.981 182.419L128.01 31.776l91.535 182.7z"></svg:path><svg:path fill="url(#skillIconsCmakeLight2)" stroke="#000" d="m95.818 163.548l123.821 50.906l-183.07-.02z"></svg:path><svg:path fill="url(#skillIconsCmakeLight3)" d="m96.006 163.671l40.287-34.368l5.609 53.075z"></svg:path><svg:defs><svg:lineargradient id="skillIconsCmakeLight0" x1="78.913" x2="123.642" y1="164.733" y2="70.115" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1011A1"></svg:stop><svg:stop offset="1" stop-color="#6969E1"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsCmakeLight1" x1="139.124" x2="201.629" y1="93.052" y2="198.566" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B40E0E"></svg:stop><svg:stop offset="1" stop-color="#FF5959"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsCmakeLight2" x1="164.929" x2="76.619" y1="206.021" y2="198.566" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#01A300"></svg:stop><svg:stop offset="1" stop-color="#01DF00"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsCmakeLight3" x1="133.963" x2="132.816" y1="173.335" y2="134.914" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#848484"></svg:stop><svg:stop offset="1" stop-color="#D2D2D2"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class SkillIconsCmakeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
