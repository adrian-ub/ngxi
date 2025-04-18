import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSzIcon],svg[circle-flags-sz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSz0)"><svg:path fill="#ffda44" d="m0 144.7l256-20.5l256 20.5V178l-37.4 79l37.4 77v33.3l-256 24.1L0 367.3V334l37.7-77.3L0 178z"></svg:path><svg:path fill="#333" d="M0 0h512v144.7H0z"></svg:path><svg:path fill="#0052b4" d="M0 367.3h512V512H0z"></svg:path><svg:path fill="#a2001d" d="M0 178h512v156H0z"></svg:path><svg:path fill="#ffda44" d="M89.2 244.9h334V267h-334zm44.6-44.6h244.8v22.3H133.8z"></svg:path><svg:path fill="#eee" d="m256.2 189.2l-18 65.2l18 68.4c66.8 0 124-66.8 124-66.8s-57.2-66.8-124-66.8"></svg:path><svg:path fill="#333" d="M256.2 322.8c-66.8 0-124-66.8-124-66.8s57.2-66.8 124-66.8"></svg:path><svg:path fill="#eee" d="M211.7 233.7h22.2v44.6h-22.2z"></svg:path><svg:path fill="#333" d="M278.5 233.7h22.2v44.6h-22.2z"></svg:path><svg:g fill="#0052b4" transform="translate(.2)"><svg:circle cx="89" cy="256" r="22.3"></svg:circle><svg:circle cx="423" cy="256" r="22.3"></svg:circle></svg:g></svg:g>`,
})
export class CircleFlagsSzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
