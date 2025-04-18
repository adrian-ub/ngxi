import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEsIcon],svg[token-branded-es-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#4D4D4D" d="M17.062 9.12c.149-.404-.144-.737-.135-1.151q-.001-.09.059-.023l3.9 3.964a.4.4 0 0 1 .082.437a.4.4 0 0 1-.09.126l-3.474 3.392c-.202.194-.27.158-.216-.117c.306-1.52-.27-3.532-1.786-4.243c-1.25-.585-3.06-.571-4.324-.783c-.887-.148-1.611-.864-1.427-1.8c.288-1.47 2.43-1.633 3.546-1.237c.801.288.954.675 1.251 1.323q.101.212.472.248c.338.036.675.045 1 .045c.319 0 .634 0 .944-.027a.23.23 0 0 0 .198-.153"></svg:path><svg:path fill="#8C1A09" d="m7.068 15.105l.216.805c.014.046 0 .086-.05.108c-.062.027-.116.023-.157-.027a145 145 0 0 0-3.96-4.04c-.157-.162-.157-.315.005-.473L7.01 7.745c.162-.149.225-.117.198.103q-.049.378-.09.896c-.207 2.452 1.66 4.265 3.96 4.391c1.3.072 3.261-.18 3.509 1.18c.184 1.038-.635 1.857-1.611 2.082c-1.44.329-2.52-.121-3.23-1.35c-.311-.53-1.89-.323-2.453-.27a.266.266 0 0 0-.23.325z"></svg:path></svg:g>`,
})
export class TokenBrandedEsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
