import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonAltToSunnyOutlineLoopTransitionIcon],svg[line-md-moon-alt-to-sunny-outline-loop-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g><svg:mask id="lineMdMoonAltToSunnyOutlineLoopTransition0"><svg:circle cx="12" cy="12" r="12" fill="#fff"></svg:circle><svg:circle cx="12" cy="12" r="8"><svg:animate fill="freeze" attributeName="r" dur="0.4s" values="8;4"></svg:animate></svg:circle><svg:circle cx="18" cy="6" r="12" fill="#fff"><svg:animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22"></svg:animate><svg:animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2"></svg:animate><svg:animate fill="freeze" attributeName="r" dur="0.4s" values="12;3"></svg:animate></svg:circle><svg:circle cx="18" cy="6" r="10"><svg:animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22"></svg:animate><svg:animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2"></svg:animate><svg:animate fill="freeze" attributeName="r" dur="0.4s" values="10;1"></svg:animate></svg:circle></svg:mask><svg:circle cx="12" cy="12" r="10" mask="url(#lineMdMoonAltToSunnyOutlineLoopTransition0)" fill="currentColor"><svg:animate fill="freeze" attributeName="r" dur="0.4s" values="10;6"></svg:animate></svg:circle>`,
})
export class LineMdMoonAltToSunnyOutlineLoopTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
