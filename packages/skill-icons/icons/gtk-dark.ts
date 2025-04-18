import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsGtkDarkIcon],svg[skill-icons-gtk-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#E40000" stroke="#fff" stroke-width="4.919" d="M30.875 169.163L26 52.061l77.923 56.207v126.477z"></svg:path><svg:path fill="#7FE719" stroke="#fff" stroke-width="4.919" d="m103.946 234.767l116.896-46.831l9.75-117.101l-126.646 37.479V234.79z"></svg:path><svg:path fill="#729FCF" stroke="#fff" stroke-width="4.919" d="m26 52.062l77.923 56.206L230.568 70.79L143.606 21z"></svg:path><svg:path stroke="#fff" stroke-width="2.901" d="M143.227 135.325V21.546m0 113.779L31.301 167.183zm0 0l78.089 52.338z"></svg:path></svg:g>`,
})
export class SkillIconsGtkDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
