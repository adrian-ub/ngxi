import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileZipIcon],svg[hugeicons-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 21.998c-2.462-.012-3.816-.105-4.797-.796a4.1 4.1 0 0 1-.855-.805c-.848-1.066-.848-2.6-.848-5.67v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35c.268.676.268 1.523.268 3.216V14c0 3.438 0 5.308-.943 6.5"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m-1 17.1v1.25c0 .56 0 .84.111 1.056c.111.214.296.387.526.49c.231.104.531.104 1.131.104h.964c.6 0 .9 0 1.131-.104a1.1 1.1 0 0 0 .526-.49C17 21.19 17 20.91 17 20.351v-1.252c0-.795-.482-1.522-1.244-1.877a2.4 2.4 0 0 0-2.012 0c-.762.355-1.244 1.082-1.244 1.877M14 4h1m1 2.5h1m-3 2h1m1 2.1h1M14 13h1m1 2h1"></svg:path></svg:g>`,
})
export class HugeiconsFileZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
