import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsWebassemblyIcon],svg[skill-icons-webassembly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#skillIconsWebassembly0)"><svg:path fill="#654FF0" d="M157.281 0v1.38c0 16.214-13.143 29.353-29.352 29.353c-16.213 0-29.352-13.143-29.352-29.353V0H0v256h256V0z"></svg:path><svg:path fill="#fff" d="M59.466 137.96h16.966l11.583 61.687h.209l13.921-61.687h15.87l12.574 62.444h.247l13.202-62.444h16.64l-21.622 90.641h-16.837l-12.47-61.687h-.326l-13.348 61.687h-17.15zm120.34 0h26.747l26.562 90.641h-17.502l-5.777-20.17h-30.469l-4.459 20.17h-17.046zm10.182 22.341l-7.4 33.255h23.032l-8.496-33.255z"></svg:path></svg:g><svg:defs><svg:clippath id="skillIconsWebassembly0"><svg:rect width="256" height="256" fill="#fff" rx="60"></svg:rect></svg:clippath></svg:defs></svg:g>`,
})
export class SkillIconsWebassemblyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
