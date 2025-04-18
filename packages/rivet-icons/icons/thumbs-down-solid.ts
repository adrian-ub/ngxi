import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsThumbsDownSolidIcon],svg[rivet-icons-thumbs-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 10H16V1h-3.5zm-2-9H1.617L.648 8.752A2 2 0 0 0 2.633 11H5v1a3 3 0 0 0 3 3h.677l1.823-4.557z"></svg:path>`,
})
export class RivetIconsThumbsDownSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
