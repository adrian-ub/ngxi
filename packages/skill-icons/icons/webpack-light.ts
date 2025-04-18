import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsWebpackLightIcon],svg[skill-icons-webpack-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2ED" rx="60"></svg:rect><svg:path fill="#8ED6FB" d="m208.082 179.205l-76.652 43.358v-33.77l47.758-26.271zm5.243-4.748V83.78l-28.05 16.188v58.282zM48.05 179.205l76.652 43.358v-33.77l-47.759-26.271zm-5.243-4.748V83.78l28.05 16.188v58.282zm3.281-96.544l78.614-44.476v32.651L74.34 93.79l-.385.22zm163.955 0L131.43 33.437v32.651l50.362 27.702l.385.22z"></svg:path><svg:path fill="#1C78C0" d="m124.702 181.111l-47.117-25.905v-51.333l47.117 27.207zm6.728 0l47.117-25.905v-51.333L131.43 131.08zM80.775 97.933l47.3-26.015l47.3 26.015l-47.3 27.317z"></svg:path></svg:g>`,
})
export class SkillIconsWebpackLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
