import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosHtml5BoilerplateIcon],svg[logos-html5-boilerplate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#222" d="M0 0h256v256H0z"></svg:path><svg:path fill="#E08524" d="M114.406 35.277L91.827 99.82l-68.494.189l55.51 41.021l-19.948 66.233l56.075-39.7l57.584 42.147l-21.079-68.869l54.948-41.021l-68.306.189z"></svg:path><svg:path fill="#466770" d="m117.228 34.336l22.768 10.726l19.005 51.937h-18.817L117.228 34.34"></svg:path><svg:path fill="#304A51" d="m156.34 142.239l22.486 11.044l54.42-39.518l-22.486-11.975z"></svg:path><svg:path fill="#466770" d="m156.308 142.198l22.518 11.035l21.289 68.839l-23.285-11.842l-20.522-68.03"></svg:path><svg:path fill="#304A51" d="m62.095 209.618l52.875-37.822l18.535 13.736l-49.96 35z"></svg:path>`,
})
export class LogosHtml5BoilerplateIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
