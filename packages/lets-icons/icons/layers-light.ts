import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLayersLightIcon],svg[lets-icons-layers-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" d="M12 4L5 7l7 3l7-3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.66 10.316L4.803 11.54a.5.5 0 0 0 0 .92l7 3a.5.5 0 0 0 .394 0l7-3a.5.5 0 0 0 0-.92l-2.857-1.224l-1.27.544L17.73 12L12 14.456L6.27 12l2.66-1.14z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.66 15.316L4.803 16.54a.5.5 0 0 0 0 .92l7 3a.5.5 0 0 0 .394 0l7-3a.5.5 0 0 0 0-.92l-2.857-1.224l-1.27.544L17.73 17L12 19.456L6.27 17l2.66-1.14z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsLayersLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
