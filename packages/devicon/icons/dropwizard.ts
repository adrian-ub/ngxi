import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconDropwizardIcon],svg[devicon-dropwizard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconDropwizard0" x2="1" gradientTransform="matrix(-3070 -1630 -1630 3070 3221.19 2903.28)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#3871c1"></svg:stop><svg:stop offset=".515" stop-color="#2c3792"></svg:stop><svg:stop offset=".865" stop-color="#24265d"></svg:stop><svg:stop offset="1" stop-color="#252761"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconDropwizard1" x2="1" gradientTransform="scale(-1851.53798 1851.53798)rotate(-14.621 3.82 4.204)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#3871c1"></svg:stop><svg:stop offset=".515" stop-color="#2c3792"></svg:stop><svg:stop offset=".865" stop-color="#24265d"></svg:stop><svg:stop offset="1" stop-color="#252761"></svg:stop></svg:lineargradient><svg:clippath id="deviconDropwizard2"><svg:path d="M180.895 285.039S1320.7-280.582 2192.75 391.68c-227.41 610.38-626.72 2371.23-862.53 3148.89c-50.27 165.81-58.48 182.34-79.05 227.87c-115.09 254.71-236.16-494.3-433.061-1248.28c-70.507-270.25-637.214-2235.121-637.214-2235.121"></svg:path></svg:clippath><svg:clippath id="deviconDropwizard3"><svg:path d="M410.777 410.078S1385.91-162.09 2192.75 391.68c-21.6 96.371-76.64 251.09-114.02 395.218c-198.64 765.722-558.14 2058.592-733.32 2700.432c-189.87 694.95-251.29-117.65-472.781-982.33c-67.293-262.93-461.852-2094.922-461.852-2094.922"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#deviconDropwizard2)" transform="matrix(.03194 0 0 -.03194 26.222 125.997)"><svg:path fill="url(#deviconDropwizard0)" d="M180.895 285.039S1320.7-280.582 2192.75 391.68c-227.41 610.38-626.72 2371.23-862.53 3148.89c-50.27 165.81-58.48 182.34-79.05 227.87c-115.09 254.71-236.16-494.3-433.061-1248.28c-70.507-270.25-637.214-2235.121-637.214-2235.121"></svg:path></svg:g><svg:g clip-path="url(#deviconDropwizard3)" transform="matrix(.03194 0 0 -.03194 26.222 125.997)"><svg:path fill="url(#deviconDropwizard1)" d="M410.777 410.078S1385.91-162.09 2192.75 391.68c-21.6 96.371-76.64 251.09-114.02 395.218c-198.64 765.722-558.14 2058.592-733.32 2700.432c-189.87 694.95-251.29-117.65-472.781-982.33c-67.293-262.93-461.852-2094.922-461.852-2094.922"></svg:path></svg:g><svg:path fill="#f9a72b" d="m47.785 97.062l3.237-5.586l3.025 5.884l-3.461 7.59zm26.436-21.14l3.238-5.586l3.025 5.885l-3.463 7.589zm-18.1-22.307l3.238-5.585l3.024 5.885l-3.462 7.587z"></svg:path><svg:path fill="#fff200" d="m47.785 97.062l3.242-6.541l3.02 6.84l-3.456 5.595zm26.436-21.14l3.244-6.541l3.019 6.84l-3.456 5.595l-2.806-5.894m-18.1-22.307l3.242-6.54l3.019 6.84l-3.457 5.594z"></svg:path><svg:path fill="#24265d" d="M51.012 112.36s23.19 3.868 38.455-5.904c-1.914 5.904-19.03 12.631-38.455 5.904"></svg:path>`,
})
export class DeviconDropwizardIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
