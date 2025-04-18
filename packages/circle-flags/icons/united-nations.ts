import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUnitedNationsIcon],svg[circle-flags-united-nations-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUnitedNations0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUnitedNations0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="256" r="145" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="111" fill="#338af3"></svg:circle><svg:path fill="#338af3" d="M76 76h360L256 256z"></svg:path><svg:circle cx="256" cy="256" r="89" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="69" fill="#338af3"></svg:circle><svg:path fill="#eee" d="M246 178h20v156h-20z"></svg:path><svg:path fill="#eee" d="M334 246v20H178v-20z"></svg:path><svg:path fill="#eee" d="m304 193.7l14.2 14.2l-110.3 110.3l-14.2-14.1z"></svg:path><svg:path fill="#eee" d="m318.2 304l-14.1 14.2l-110.4-110.3l14.2-14.2z"></svg:path><svg:circle cx="256" cy="256" r="44" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="22" fill="#338af3"></svg:circle><svg:ellipse cx="256" cy="412" fill="#eee" rx="44" ry="40"></svg:ellipse><svg:path fill="#338af3" d="m256 407l-78 63h156z"></svg:path></svg:g>`,
})
export class CircleFlagsUnitedNationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
