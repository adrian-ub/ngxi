import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShrimpSolidIcon],svg[streamline-shrimp-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.347 1.781a.754.754 0 1 0 0 1.508H3.35v-.002h5.24q.062.09.162.147a1 1 0 0 1 .123.162c.088.139.189.337.283.583A5.2 5.2 0 0 1 9.5 6a5.2 5.2 0 0 1-.342 1.82a3.4 3.4 0 0 1-.283.583a1 1 0 0 1-.123.163a.5.5 0 0 0-.21.233H7.35a4 4 0 0 1-4-4v-.01H2.347a2.254 2.254 0 1 1 0-4.508h4.511a.75.75 0 0 1 0 1.5h-4.51Zm7.745 2.04a5 5 0 0 0-.186-.426a5.02 5.02 0 0 1 3.54 2.872c-.425 2.075-1.887 3.21-2.793 3.633a2 2 0 0 0-.96-.921l.026-.039c.13-.205.26-.465.373-.76A6.2 6.2 0 0 0 10.5 6a6.2 6.2 0 0 0-.408-2.18Zm.774 7.076c.865-.35 2.196-1.247 3.004-2.83q.006.115.006.232c0 2.426-1.724 4.833-4.013 5.391v-.63q0-.252-.044-.493a2 2 0 0 0 1.047-1.67m-2.02 1.918q.018.12.017.246v.752H6.19a.835.835 0 0 1-.835-.836c0-.923.748-1.67 1.67-1.67h.084c.885 0 1.616.654 1.737 1.505zM7.36 5.542a.752.752 0 1 1-1.504 0a.752.752 0 0 1 1.504 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShrimpSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
