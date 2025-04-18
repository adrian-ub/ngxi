import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAmbulanceIcon],svg[hugeicons-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 18h4M13.5 8h.943c1.31 0 1.966 0 2.521.315c.556.314.926.895 1.667 2.056c.52.814 1.064 1.406 1.831 1.931c.772.53 1.14.789 1.343 1.204c.195.398.195.869.195 1.811c0 1.243 0 1.864-.349 2.259l-.046.049c-.367.375-.946.375-2.102.375H19M5 18c-1.414 0-2.121 0-2.56-.44C2 17.122 2 16.415 2 15V8c0-1.414 0-2.121.44-2.56C2.878 5 3.585 5 5 5h5.5c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v10H9m13-3h-1M8 9v4m2-2H6"></svg:path><svg:circle cx="17" cy="18" r="2"></svg:circle><svg:circle cx="7" cy="18" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsAmbulanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
