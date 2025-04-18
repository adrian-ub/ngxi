import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolProgress6Icon],svg[websymbol-progress-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M559 197H441V-68h118zm0 735H441V667h118zm176-441V373h265v118zM0 373h265v118H0zm812 454L625 640l83-83l187 187zm0-790l83 83l-187 187l-83-83zM188 827l-83-83l187-187l83 83z"></svg:path>`,
})
export class WebsymbolProgress6Icon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
