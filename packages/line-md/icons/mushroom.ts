import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMushroomIcon],svg[line-md-mushroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="11" cy="4" r="0"><svg:animate fill="freeze" attributeName="r" begin="0.9s" dur="0.2s" values="0;2"></svg:animate></svg:circle><svg:circle cx="7" cy="8" r="0"><svg:animate fill="freeze" attributeName="r" begin="1s" dur="0.2s" values="0;2"></svg:animate></svg:circle><svg:circle cx="15" cy="8" r="0"><svg:animate fill="freeze" attributeName="r" begin="1.1s" dur="0.2s" values="0;2"></svg:animate></svg:circle></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 21h2.5c0.5 0 0.85 -0.5 0.85 -1c0 -0.5 -1.1 -4 -1.1 -4h-2.25M12 21h-2.5c-0.5 0 -0.85 -0.5 -0.85 -1c0 -0.5 1.1 -4 1.1 -4h2.25"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 13h8c0.55 0 1 -0.45 1 -1c0 -4.97 -4.03 -9 -9 -9M12 13h-8c-0.55 0 -1 -0.45 -1 -1c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="28;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdMushroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
