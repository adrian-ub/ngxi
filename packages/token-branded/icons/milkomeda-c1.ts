import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMilkomedaC1Icon],svg[token-branded-milkomeda-c1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FF931E" d="M12.128 13.68c.919 0 1.663-.74 1.663-1.654s-.744-1.655-1.663-1.655c-.918 0-1.663.741-1.663 1.655s.745 1.655 1.663 1.655"></svg:path><svg:path fill="#fff" d="M19.735 10.347L21 12.527l-6.665 3.828s-4.081 2.454-7.016-2.606l2.075-1.191s1.349 2.966 3.686 1.619c2.338-1.347 6.655-3.83 6.655-3.83"></svg:path><svg:path fill="#fff" d="M4.265 13.734L3 11.554l6.807-3.909s4.081-2.454 7.015 2.606l-2.076 1.191s-1.348-2.965-3.686-1.619c-2.337 1.347-6.795 3.91-6.795 3.91m1.991 2.531c.48 0 .869-.387.869-.864a.866.866 0 0 0-.869-.864a.866.866 0 0 0-.868.864c0 .477.389.864.868.864m11.594-6.66c.48 0 .868-.387.868-.865a.866.866 0 0 0-.869-.864a.866.866 0 0 0-.868.864c0 .478.389.865.868.865"></svg:path></svg:g>`,
})
export class TokenBrandedMilkomedaC1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
