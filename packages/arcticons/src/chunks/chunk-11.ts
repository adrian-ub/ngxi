import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInaturalistIcon],svg[arcticons-inaturalist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.56 23.21c.88 0 3.06-8.39 12.94-5.05c-4.76 3.63-2.1 8.66-6.86 15.21A18.47 18.47 0 0 1 22 41.11a18.7 18.7 0 0 1-6.91-1.25A16 16 0 0 0 27 31.61a12.15 12.15 0 0 1-14-5.8a18 18 0 0 1 4.67-.69s-8.14-3.27-9-5.85c1.21-.95 4.94-.42 4.94-.42S5 14.1 4.5 10.86c15.25 0 25.23 12.35 26.06 12.35"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.32 18S19.15 11.42 19 6.89C22.91 7 30.29 13 31.27 22.41"></svg:path><svg:circle cx="37.97" cy="19.87" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsInaturalistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInbentoIcon],svg[arcticons-inbento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.473 17.52c-.835-.417-3.756-.373-4.371-.395s-1.626.066-2.109.066a20.4 20.4 0 0 0-4.271.696L9.789 7.703l.794 19.636a36.4 36.4 0 0 0-1.12 6.633a3.74 3.74 0 0 0 .242 1.998a17 17 0 0 0 3.273 3.295c.944.55 8.83 1.032 12.322 1.032a78 78 0 0 0 9.159-.46a19.5 19.5 0 0 0 4.217-4.175a36.4 36.4 0 0 0-1.055-8.06l1.516-19.9Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.621 27.602a49 49 0 0 0-5.161-5.6l6.677-14.3M10.583 27.339s3.954-4.635 4.986-5.294L9.79 7.703m1.109 25.83L4.5 31.647m0 4.917l6.601-1.212M43.5 31.916l-6.264 1.617M43.5 36.8l-6.466-1.138m-13.021-2.248a8.4 8.4 0 0 0 1.528-.037M30.45 36.8c-3.856.994-5.473-1.179-5.673-1.633c-.777.791-3.235 2.45-5.222 1.89m-1.937-8.727l.017 2.492m13.134-2.307l-.05 2.206"></svg:path>`,
})
export class ArcticonsInbentoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInbrowserIcon],svg[arcticons-inbrowser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.3 33.182l-5.878-8.237s3.594-2.06 5.878-1.947c0 0-3.295-2.06-3.257-3.107s2.883-2.77 6.776-3.37m1.461-8.049l-1.46 8.46s.599 5.242 9.66 5.654s7.974-6.252 7.974-6.814s.112-7.001-2.658-7.675a14.4 14.4 0 0 0-5.017-.337l-.824 2.808S22.71 8.022 20.8 8.022a14.6 14.6 0 0 0-3.519.45"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.52 37.76a16.4 16.4 0 0 0-3.959-4.878l5.467-8.237c-.787-.3-3.407-1.16-3.407-1.16s1.722-1.573 1.722-3.257c0-1.274-3.064-4.156-6.849-4.755M10.74 30.996a34 34 0 0 0-5.148 4.118M16.129 15.14a13.4 13.4 0 0 0 9.612 3.814c4.942 0 6.33-1.348 7.751-2.433M26.943 27.17c0 1.856-.603 4.065-3.598 4.065s-3.033-2.77-2.92-5.28c2.246.712 8.464 2.285 13.068.225c.71 2.471-.339 4.568-1.949 4.568s-2.883-1.16-2.844-3.558m-2.36 8.388s-6.664 2.32-7.413 2.546s-2.546-3.482-1.835-4.156s2.634-1.086 3.301-.412s.263 3.988.263 3.988"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInbrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIncognitowalletIcon],svg[arcticons-incognitowallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42 39.5a1.5 1.5 0 0 0 1.5-1.5h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.897 4.828" stroke-linecap="round" stroke-linejoin="round" d="M43.5 33.172V12.414"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 10A1.5 1.5 0 0 0 42 8.5h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.919 4.865" stroke-linecap="round" stroke-linejoin="round" d="M37.135 8.5H8.432"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 8.5A1.5 1.5 0 0 0 4.5 10h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.897 4.828" stroke-linecap="round" stroke-linejoin="round" d="M4.5 14.828v20.758"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 38A1.5 1.5 0 0 0 6 39.5h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.919 4.865" stroke-linecap="round" stroke-linejoin="round" d="M10.865 39.5h28.703"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 20.4h-1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.067 2.067" stroke-linecap="round" stroke-linejoin="round" d="M40.433 20.4h-4.085a2.85 2.85 0 0 0-2.848 2.848v1.504a2.85 2.85 0 0 0 2.848 2.848h5.118"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 27.6h1"></svg:path><svg:circle cx="36.472" cy="24" r=".795" fill="currentColor"></svg:circle>`,
})
export class ArcticonsIncognitowalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIncollageCollageMakerIcon],svg[arcticons-incollage-collage-maker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M24 5.5v37M20 24H5.5"></svg:path>`,
})
export class ArcticonsIncollageCollageMakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIncrediboxIcon],svg[arcticons-incredibox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.454 37.561c-2.212-2.347-2.68-4.53-3.305-7.679c-1.309.847-2.853 1.402-4.571 1.108c1.486-1.041 2.424-1.834 3.058-2.953c-1.117.6-1.367.886-3.026.777c2.885-2.674 2.818-4.851 3.278-7.564a5.9 5.9 0 0 1-2.15.36l2.391-2.34C11.19 9.938 16.642 4.7 23.413 4.594c.68-.011 1.556-.147 2.403-.07c3.374.304 7.897 1.1 10.191 5.325c2.732 5.03.816 7.924 4.415 15.428c-1.165-.455-1.85-1.078-2.755-2.06c1.137 5.56 1.201 7.32-2.125 13.413l-.246-1.093c-.511.893-1.033 1.603-2.159 2.493"></svg:path><svg:path d="M31.723 37.276c.579-.814 1.01-1.881 1.155-3.696c.118-1.463.357-3.2.788-4.975c1.962-1.009 2.016-2.36 2.407-4.811c.28-1.756-.81-1.596-1.314-.768c.068-1.995.075-4.009.002-5.357c-.05-.913.03-2.392-.477-2.898c-.38-.38-.724-.29-1.14-.079c-2.901 1.47-5.29 2.756-9.294 4.006h0c1.399-.954 2.955-2.811 3.238-3.861c-3.567 2.32-9.673 4.462-12.344 4.473c-.15 1.162-.209 2.48-.184 3.814c-.47-.884-1.728-1.086-1.448.67c.392 2.452.446 3.802 2.453 5.01c.262 1.818.18 3.415.288 4.776c.09 1.116.327 1.941.654 2.599m3.059 3.47c1.406 1.77 2.959 3.909 4.8 3.85c1.524-.05 3.641-2.18 5.211-3.934q.146-.163.292-.313"></svg:path><svg:path d="M25.692 35.245q.309-.021.656-.062c1.249-.148 3.702 1.397 5.431 2.116h0c-1.696 2.227-4.447 4.05-7.45 4.155c-4.045-.112-6.103-2.978-7.823-5.276c1.75-.24 2.989-1.216 4.317-1.23c1.178-.013 1.965.142 2.832.242"></svg:path><svg:path d="M25.366 37.557c2.47-.606 3.655-.463 5.903-.476m-14.106-.994c2.72.5 5.162.849 7.28 1.471m1.773-16.398c3.643-1.533 6.046-.74 8.414.186m-19.894.994c1.812.543 4.89-1.28 8.448-.568m9.81 3.583l-7.259-.192c-.238 1.098.897 3.161 3.321 3.295c2.098.115 3.25-1.28 3.574-3.102m-9.096-.01l-7.073-.226c-.13.878.313 3.076 3.11 3.314c2.364.2 3.632-1.73 3.596-3.09"></svg:path><svg:path d="M32.994 25.355c.094-1.644-1.237-3.344-3.475-3.351c-2.499-.008-3.768 1.57-3.813 3.15l-.215 7.464c1.115 2.081-.138 1.986-.142 4.959l-.499.5l-.577-.723c.064-.335.013-.692-.093-1.034c-.49-1.572-2.059-2.604-.24-3.653c-.018-3.165-.164-4.116-.406-7.321c-.133-1.772-1.535-3.44-3.702-3.41c-2.103.027-3.472 1.828-3.371 3.184"></svg:path><svg:path d="M27.618 25.212c-.034.805.631 1.715 1.566 1.712c1.038-.002 1.56-.685 1.781-1.621m-9.565-.026c-.088.78-.645 1.736-1.757 1.636c-1.156-.103-1.678-1.128-1.548-1.741"></svg:path></svg:g>`,
})
export class ArcticonsIncrediboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndMoneyIcon],svg[arcticons-ind-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4m4-23.571v11.183"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.767 30.112V18.929l7.409 11.183V11.888m2.915 18.224V18.93h2.516a4.893 4.893 0 0 1 4.893 4.893v1.398a4.893 4.893 0 0 1-4.893 4.892z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.299 16.01l-4.123-4.122l-4.123 4.122"></svg:path>`,
})
export class ArcticonsIndMoneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndeedIcon],svg[arcticons-indeed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.758 27.267V40.53c0 3.958 6.964 3.96 6.964 0V27.267a7.72 7.72 0 0 1-6.964 0"></svg:path><svg:ellipse cx="26.468" cy="16.146" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.17" ry="4.139"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.518 22.771c2.33-9.728 11.661-25.061 26.964-14.96"></svg:path>`,
})
export class ArcticonsIndeedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInderixIcon],svg[arcticons-inderix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.815 16.893l6.386 6.386a1.02 1.02 0 0 1 0 1.442L32.79 36.132"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.658 6.842h16.138c.563 0 1.02.457 1.02 1.02V24c0 9.476-7.683 17.158-17.158 17.158S3.5 33.476 3.5 24S11.182 6.842 20.658 6.842M13.24 16.901v14.198m7.418-14.198v14.198"></svg:path>`,
})
export class ArcticonsInderixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndiaDrugIndexIcon],svg[arcticons-india-drug-index-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h16.714c8.989 0 16.286 7.297 16.286 16.286v4.428c0 8.989-7.297 16.286-16.286 16.286H9.5c-2.208 0-4-1.792-4-4v-29c0-2.208 1.792-4 4-4"></svg:path><svg:rect width="25.261" height="11.425" x="10.11" y="17.028" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.712" ry="5.712" transform="rotate(45 22.74 22.74)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.215 15.75l4.63 4.628a1.327 1.327 0 0 1 0 1.876l-2.59 2.59a1.327 1.327 0 0 1-1.876 0l-4.629-4.63a3.16 3.16 0 0 1 0-4.464h0a3.16 3.16 0 0 1 4.465 0"></svg:path>`,
})
export class ArcticonsIndiaDrugIndexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndiaMapQuizIcon],svg[arcticons-india-map-quiz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="1.697" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 22.303v-5.799m1.2 6.296l4.1-4.1M25.697 24h5.799M25.2 25.2l4.1 4.1M24 25.697v5.799M22.8 25.2l-4.1 4.1m3.603-5.3h-5.799m6.296-1.2l-4.1-4.1m5.739 3.661l1.501-5.601m-.471 6.392l5.022-2.9m-4.852 4.187l5.601 1.501m-6.392-.471l2.9 5.022m-4.187-4.852L22.06 31.24m.471-6.392l-5.022 2.9m4.852-4.187L16.76 22.06m6.392.471l-2.9-5.022m4.596 5.022l2.9-5.022m-2.109 6.052l5.601-1.501m-5.771 2.788l5.022 2.9m-6.052-2.109l1.501 5.601m-2.788-5.771l-2.9 5.022m2.109-6.052L16.76 25.94m5.771-2.788l-5.022-2.9m6.052 2.109L22.06 16.76"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.29 14.5H4.71m38.58 19H4.71"></svg:path>`,
})
export class ArcticonsIndiaMapQuizIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndiamartIcon],svg[arcticons-indiamart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="13.615" cy="9.941" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.322" ry="2.787"></svg:ellipse><svg:ellipse cx="29.287" cy="9.414" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.344" ry="4.273"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.854 19.322c-1.667 2.224-1.926 3.73-1.635 6.31c.292 2.58 1.147 6.149 5.246 9.794s11.44 7.368 18.667 7.432s14.337-3.53 15.557-8.741s-3.453-12.04-9.524-16c-6.072-3.96-13.253-5.01-18.635-4.21c-5.381.8-8.009 3.19-9.676 5.415"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.1 37.467c.3-5.712.6-11.424.787-14.883c.188-3.46.265-4.666 1.382-2.933s3.273 6.405 5.43 11.077m1.684.115c2.199-4.043 4.397-8.086 5.823-10.268s2.081-2.503 2.954 1.43s1.963 12.116 3.053 20.3"></svg:path>`,
})
export class ArcticonsIndiamartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndianAstrologyIcon],svg[arcticons-indian-astrology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 31.224l5.044-7.766l-4.12-7.224l8.666-2.564l2.664-8.849l7.779 4.262L31.28 5.11l3.02 8.416l9.2 3.214l-4.369 7.405l3.836 7.26l-8.524 2.636l-2.948 8.849l-7.104-4.226l-7.495 4.515l-2.7-9.066z"></svg:path><svg:ellipse cx="24.229" cy="23.645" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="12.853" ry="13.07"></svg:ellipse>`,
})
export class ArcticonsIndianAstrologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndianBikesDriving3dIcon],svg[arcticons-indian-bikes-driving-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.65 24.389c1.915.172 4.17-.434 3.563-2.044m1.263 5.059c-.137.93-1.041 1.63-2.018 1.566c-.976-.065-1.658-.871-1.52-1.8c.136-.93 1.04-1.63 2.016-1.566c.978.065 1.658.87 1.521 1.8m14.195-1.262l1.62-.2c1.512-.185 1.8-.717 1.525-1.672m3.554-5.243l.13-.656c-.72-1.224-1.44-1.538-2.16-2.008l-2.13.128m-1.301 4.983l1.84-.36m0 0c.845-.165 1.507-.58 1.742-1.05l1.625.235l.252-1.272m-8.823 4.188l.214-1.125l3.15-.616"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.805 22.767c.829 1.32 1.659 2.639 3.923 2.633l-2.054-2.955M32.9 25.96l-4.485-.289l-.688 3.358c-1.096.108-1.624.307-3.056.175m12.562-1.186c-.157 1.769-1.724 2.081-3.53 1.832l-5.977-.82m7.743-1.088l-2.513-6.169m-7.997.507c-1.476.061-3.082-.024-4.507-.275m8.258-.343c-.901.344-2.26.556-3.751.618"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.175 23.922l.226 1.716c2.011.082 3.856.249 5.25-.709c1.594-1.097 1.955-2.054 1.798-3.167m-6.209-4.377c-1.21-.66-2.267-1.243-3.263-1.42c-1.584-.28-2.533-.516-4.742.323"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.895 21.767l1.22.012c1.366.014 2.302-.448 3.032-1.01c.945-.727 3.559-1.05 5.847-1.414c.615-1.003.42-2.002-.065-2.322l-1.493-.984c-2.613.177-4.704.217-6.608 1.018c-.922.39-2.302.45-3.865.415m-2.743-.111c1.387 1.146 2.16 2.707 2.777 4.384m-14.488-.687c-.398-.888-1-1.927-1.933-1.486m-.741-4.432l4.08-2.663c.902.444 1.38 1.066 1.335 1.856c-.035.6-.363.975-.62 1.316m.451 3.273l-2.573 2.135m-1.933-1.486l-.917-1.632l.176-2.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.629 15.658c-.218.29-.384.555-.273.913l.724 2.36m.459 2.416l.806 4.221m-7.897 4.479c-.1.772-.81 1.39-1.585 1.377S7.541 30.774 7.642 30c.1-.772.81-1.39 1.584-1.377c.775.013 1.323.65 1.222 1.422zM40.6 27.41q0 .345-.046.701c-.394 3.031-3.174 5.449-6.211 5.4c-1.763-.029-3.224-.882-4.064-2.184"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.716 26.565c.679.967 1.003 2.204.828 3.547c-.392 3.03-3.172 5.448-6.21 5.4c-3.037-.05-5.182-2.546-4.789-5.577s3.173-5.45 6.211-5.4q.412.007.802.073"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.442 28.184c.24-6.072-3.822-7.58-8.584-6.74c-1.156.202-2.538.587-2.235 1.686m8.674-.565l-.773 1.085m-.829 1.161l-2.807 3.931"></svg:path>`,
})
export class ArcticonsIndianBikesDriving3dIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndianExpressIcon],svg[arcticons-indian-express-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.565 7.97l14.402 13.224c.51 3.345-1.363 5.629-3.086 7.46q.444-2.45-.092-3.73L21.203 12.128q-1.68-3.43 3.362-7.628q-.418 1.865 0 3.47m-5.846 7.47L33.12 28.663c.51 3.345-1.363 5.629-3.086 7.452q.443-2.442-.092-3.722L15.357 19.596q-1.681-3.429 3.362-7.627q-.419 1.865 0 3.47m-5.997 7.378l14.402 13.23c.51 3.338-1.363 5.621-3.078 7.453q.444-2.45-.092-3.73L9.369 26.982q-1.68-3.438 3.354-7.636q-.41 1.865 0 3.47"></svg:path>`,
})
export class ArcticonsIndianExpressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndianRecipesIcon],svg[arcticons-indian-recipes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.872 25.779v6.104m1.851 0v-6.104h1.998c1.13 0 2.045.918 2.045 2.05s-.915 2.05-2.045 2.05h-1.998M7.928 31.883v-6.104h1.998c1.13 0 2.045.918 2.045 2.05s-.916 2.05-2.045 2.05H7.927m1.999 0l1.999 2.002m24.225-.667c.374.488.843.67 1.496.67h.904c.84 0 1.522-.683 1.522-1.523v-.007c0-.841-.681-1.523-1.522-1.523h-.997a1.524 1.524 0 0 1-1.524-1.524h0c0-.843.684-1.527 1.527-1.527h.899c.653 0 1.122.181 1.497.668m-17.917 3.388v.025a2.02 2.02 0 0 1-2.022 2.022h0a2.02 2.02 0 0 1-2.022-2.022V27.8a2.022 2.022 0 1 1 4.044 0v.025m-8.217 1.006h1.984m1.068 3.052h-3.052v-6.104h3.052m14.691 3.052h1.983m1.069 3.052h-3.052v-6.104h3.052m-23.46-9.662v6.103m13.827-6.103v6.103m-11.885 0v-6.103l4.044 6.103v-6.103m15.665 6.103v-6.103l4.043 6.103v-6.103M19.03 22.22v-6.103h1.373a2.67 2.67 0 0 1 2.67 2.67v.763a2.67 2.67 0 0 1-2.67 2.67zm11.174-2.021h-2.703m-.67 2.021l2.021-6.103l2.022 6.103"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsIndianRecipesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndianTrainStatusMinitsIcon],svg[arcticons-indian-train-status-minits-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.814 26.754s8.102 2.78 17.933-17.553h1.983V6.226h11.124v3.28h1.112s1.693-.782 3.327 8.663v10.89s-.136 4.854-2.702 5.206s-32.503 0-32.503 0s-2.595-3.022-.274-7.511"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.362 21.03c-.744 0-1.347.672-1.347 1.5h0v3.329c0 .828.603 1.499 1.347 1.499s1.347-.671 1.347-1.499h0v-3.33c0-.827-.603-1.498-1.347-1.498m-4.16 3.581c-.64 0-1.158.578-1.159 1.29v2.41c.006.712.53 1.284 1.17 1.278c.631-.007 1.142-.575 1.148-1.278v-2.41c0-.712-.519-1.29-1.159-1.29q0 0 0 0m-3.793 2.382c-.546 0-.989.492-.989 1.1h0v1.619c-.005.607.433 1.105.98 1.11c.545.006.992-.481.998-1.09v-1.64c0-.607-.443-1.1-.99-1.1Zm-3.608 1.435c-.439 0-.794.396-.794.884h0v1.346c.004.488.364.88.803.874c.432-.005.782-.393.786-.874v-1.346c0-.488-.356-.884-.795-.884"></svg:path><svg:ellipse cx="38.218" cy="26.072" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.232" ry="2.484"></svg:ellipse><svg:ellipse cx="28.67" cy="26.072" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.232" ry="2.484"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.555 12.67c-1.664-.011-3.02 1.481-3.03 3.332s1.332 3.36 2.996 3.371h.034"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.508 12.67c1.663-.011 3.02 1.481 3.03 3.332c.008 1.852-1.333 3.36-2.996 3.371h-6.988m.001-6.703h6.953M6.538 36.557c-.513-.064-.975.347-1.032.918a1 1 0 0 0 0 .23c0 1.265.437 1.12.437 1.12h1.12c11.948 0 17.112 2.949 17.112 2.949H42.5v-2.35h-1.917v-2.555h-5.158v2.45h-7.566v-2.763z"></svg:path>`,
})
export class ArcticonsIndianTrainStatusMinitsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndianoilOneIcon],svg[arcticons-indianoil-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 21.632h19.635m-1.079 5.212v-5.212m-4.897 5.212v-5.212m-8.806 5.212v-5.212c0-1.213.853-1.617 2.201-1.617s2.022.36 2.022 3.145c-1.438 0-2.441-.102-2.441.827c0 1.21 2.785.446 2.785 1.66c0 1.093-1.617 1.752-2.8.718m3.849-4.733a1.386 1.386 0 0 1 1.213 1.453c0 .824-.884.884-.884 1.723c0 .583.465.838 1.378.838a1.7 1.7 0 0 0 1.483-1.033m14.812-2.981a1.386 1.386 0 0 1 1.213 1.453c0 .824-.883.884-.883 1.723c0 .583.464.838 1.378.838a1.7 1.7 0 0 0 1.482-1.033m-16.16 0c.69-.69 2.217-.674 3.055-.674M7.17 21.632a9.5 9.5 0 0 1 .1 1.528c-1.437 0-2.44-.102-2.44.827c0 1.21 2.785.446 2.785 1.66c0 1.093-1.617 1.752-2.8.719a20 20 0 0 1 1.572 1.692m21.896-6.426H43.5m-1.138 5.25v-5.25m-6.201 5.25v-5.25m-4.822 5.25v-5.25m-1.947 5.25v-5.25m12.97 1.816a19 19 0 0 0-2.516 1.554"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.917 26.65c-.929-.69-1.273-2.172-.599-2.846s1.77-.524 2.592.472m-15.798-1.79a1.18 1.18 0 0 1 1.168-.854c.648 0 .989.674.989 1.37s-.787.921-1.303 1.056a1.31 1.31 0 0 1 1.304 1.236c0 .719-.338 1.355-1.192 1.355s-1.438-1.003-1.438-1.003m4.752-1.782h-.884m.704-3.849a2.15 2.15 0 0 0 2.351.075"></svg:path><svg:circle cx="7.142" cy="20.097" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.72 17.075h40.56M3.72 30.925h40.56"></svg:path>`,
})
export class ArcticonsIndianoilOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndianrailIcon],svg[arcticons-indianrail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.593 37.193h22.814m-20.26-1.994h17.705M16.89 33.681h14.22m-2.818-.772l6.788 6.788m-15.372-6.788l-6.788 6.788M4.5 41.453l8.989-8.847a15.46 15.46 0 0 1-4.592-10.957c0-8.34 6.762-15.103 15.103-15.103s15.103 6.762 15.103 15.103h0c0 4.15-1.708 8.118-4.592 10.958l8.989 8.847M19.708 30.909v1.726m8.584-1.726v1.726m1.51-5.208a1.5 1.5 0 0 1-1.497 1.499h-.001c-.827 0-1.498-.67-1.498-1.498v-.001a1.498 1.498 0 0 1 2.996 0m-8.608 0a1.5 1.5 0 0 1-1.497 1.499h-.001c-.827 0-1.498-.67-1.498-1.498v-.001a1.498 1.498 0 0 1 2.996 0m-2.062-13.062h9.736c.553 0 .997.444.997.996v5.138a.995.995 0 0 1-.993.997h-9.74a.995.995 0 0 1-.997-.993v-5.141c0-.552.444-.996.997-.996zm-.368-2.46h10.472a2.984 2.984 0 0 1 2.99 2.978v13.442a2.984 2.984 0 0 1-2.978 2.99H18.764a2.984 2.984 0 0 1-2.99-2.978V14.895a2.984 2.984 0 0 1 2.978-2.99z"></svg:path>`,
})
export class ArcticonsIndianrailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndigoIcon],svg[arcticons-indigo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18.585" cy="17.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.585" cy="17.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24.585" cy="17.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.585" cy="17.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.585" cy="17.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.585" cy="20.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.585" cy="23.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.585" cy="26.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.585" cy="29.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.585" cy="20.42" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.225" cy="28.775" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.225" cy="28.775" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.225" cy="28.775" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.225" cy="31.775" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.225" cy="34.775" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.22" cy="26.78" r=".75" fill="currentColor"></svg:circle><svg:circle cx="23.356" cy="24.647" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.455" cy="22.548" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.661" cy="15.34" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.775" cy="13.225" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsIndigoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndigoNeoIcon],svg[arcticons-indigo-neo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 16.684v7.094m15.467-7.094v7.094m-13.445 0v-7.094l4.7 7.094v-7.094m2.022 7.094v-7.094h1.597c1.685 0 3.104 1.419 3.104 3.104v.886c0 1.685-1.42 3.104-3.104 3.104zm17.862 0a2.29 2.29 0 0 1-2.306-2.305v-2.395c0-1.33 1.064-2.394 2.306-2.394h0a2.385 2.385 0 0 1 2.394 2.394v2.306a2.385 2.385 0 0 1-2.394 2.394m-4.328-4.7a2.385 2.385 0 0 0-2.395-2.394h0a2.385 2.385 0 0 0-2.394 2.394v2.395c0 1.33 1.064 2.305 2.394 2.305h0c1.33 0 2.395-1.064 2.395-2.305h-2.395m-8.93 9.844V28.39a1.78 1.78 0 0 0-1.774-1.774h0c-.976 0-1.774.798-1.774 1.774m0 2.927v-4.79m8.603 3.903c-.266.532-.887.887-1.508.887h0a1.78 1.78 0 0 1-1.774-1.774V28.39A1.78 1.78 0 0 1 24 26.616h0c.976 0 1.774.798 1.774 1.774v.62h-3.548m5.321-.62c0-.976.799-1.774 1.774-1.774s1.774.798 1.774 1.774v1.153c0 .975-.798 1.774-1.774 1.774s-1.774-.799-1.774-1.774z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path>`,
})
export class ArcticonsIndigoNeoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndistractableIcon],svg[arcticons-indistractable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.44" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.56" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsIndistractableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndoasisIcon],svg[arcticons-indoasis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.58 20.022l-.011-.012c-.403-1.103-.64-2.419-.64-3.984c0-10.447 14.69-10.043 18.841-7.85l1.008-3.095l6.545 11.668l-4.683 1.957h-.012l-6.095 2.549l-2.443 1.02l1.66-3.688c-6.936-2.217-6.272 5.193-2.62 7.304c-.57.036-2.241.119-4.162-.237h-.012"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.482 38.614v.012c-.76.901-1.767 1.743-3.095 2.514c-9.035 5.217-16.043-7.707-16.221-12.403L4 29.413l6.83-11.502l2.739 2.1l7.387 5.643h.012l1.257.96l-4.032.404c1.554 7.114 7.648 2.834 7.648-1.388a18 18 0 0 1 1.85 3.676"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.533 21.255c-1.945 1.802-3.083 3.984-3.403 4.636c3.652-2.099 10.399 1.032 5.016 5.94l-2.36-3.284l-.095.76l-1.21 9.307l-.533 4.15l13.375.154l-2.17-2.407c3.972-2.502 11.668-15.023 2.62-20.24c-1.896-1.091-3.604-1.542-5.145-1.565"></svg:path>`,
})
export class ArcticonsIndoasisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndoormapIcon],svg[arcticons-indoormap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.872 18.607L24 6.436L7.128 18.607v22.957h33.744zM4.5 20.503l2.628-1.896M43.5 20.503l-2.628-1.896"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.929 30.479h6.141v11.085h-6.141zm10.053 0h6.141v6.141h-6.141zm3.267-16.65V9.104h-6.551M10.877 30.479h6.141v6.141h-6.141z"></svg:path>`,
})
export class ArcticonsIndoormapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndriverIcon],svg[arcticons-indriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h8.954v8.954H5.5zm0 16.777h8.954v20.076H5.5zM24 33.399a9.472 9.472 0 0 0 0-18.945V5.5a18.5 18.5 0 0 1 0 37Z"></svg:path>`,
})
export class ArcticonsIndriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndsmartIcon],svg[arcticons-indsmart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.643 19.457c.546.003 1.137.137 1.751.432l-1.348 3.538l2.37-1.018c-.998.837-1.765 1.91-2.147 3.185c4.76-2.255 7.598 2.833 4.315 5.461l-2.565-2.645l-.122 2.833c-.212-1.6-.93-3.327-2.296-5.104c-.967 5.631-5.362 6.174-6.942 1.764l3.739-.604l-2.368-1.546c1.318.422 2.867.585 4.643.397c-3.577-2.899-1.977-6.708.97-6.693"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.77 7.997l-1.007 3.006c-5.533-2.402-12.953-1.858-15.35 3.548c-1.36 3.067-.973 6.506 1.025 8.854l-4.75-3.102L5.5 30.557l3.614-.53c1.663 6.449 6.304 10.355 11.068 9.929c3.674-.33 6.832-2.718 7.602-6.092l-.263 6.139l12.321-.258l-2.32-2.13c4.745-3.832 6.79-10.221 3.026-14.51c-1.962-2.235-4.893-3.01-7.611-2.637l4.623-1.987z"></svg:path>`,
})
export class ArcticonsIndsmartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndusAppstoreIcon],svg[arcticons-indus-appstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="11.684" r="7.184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.816 19.895L24 24.514l7.184-4.619v7.185L24 31.698l-7.184-4.618z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.816 31.697L24 36.316l7.184-4.619v7.185L24 43.5l-7.184-4.618z"></svg:path>`,
})
export class ArcticonsIndusAppstoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndusmobileIcon],svg[arcticons-indusmobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.692 28s4.185-.279 5.078-1.953c0 0-2.456-5.469 1.897-7.868s8.705.335 9.152 1.674c0 0-1.897-8.272 4.073-11.787c0 0 2.735-1.73 1.228.948c0 0-5.524 6.765.056 15.024c0 0-1.06-.223-1.172.837s-1.116 1.228-1.786 1.284s-2.957 3.795 1.953 7.812c0 0 1.06.726.447 1.786s.335 2.567 3.794 6.697"></svg:path><svg:path d="M5.58 33.078s4.576-.334 6.752-1.283s5.915 4.018 3.906 7.366c0 0-1.475 1.509-1.825 3.18m3.149-.001l.741-2.063m4.918 2.223s-.85-1.294-1.96-2.446c-.772-.8-1.457-2.264-.67-5.971c0 0 .335-1.507 0-3.627m7.15 11.981s-1.593-2.08-2.35-2.439c-.673-.32-1.62-1.786-1.396-4.687m2.567-5.86s2.902-.223 1.228 2.623m2 5.818s.447.945.893 1c.338.043.495.163.836-2.08c.197-1.297.173-1.471.407-2.73c0 0 5.473-4.65 3.063-8.147c0 0 7.868-7.447 2.399-15.706c0 0-1.698-2.176-1.507.223s3.424 10.182-6.453 12.917c0 0 1.339 1.116 2.12 1.953s3.71 3.714.864 6.448l-.456 2.287"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsIndusmobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfaktIcon],svg[arcticons-infakt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="33.036" cy="11.494" r="6.994" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.117 9.4c.005-.072-3.732 3.342 2.255 7.956c-2.414 4.293 1.881 6.376 1.881 6.376c-2.145 4.005 3.072 5.978 3.072 5.978c-2.21 5.092-4.416 9.976-7.851 13.755c3.3.194 4.506-.417 6.404-1.798c7.476-5.44 10.9-13.792 12.729-18.373c.851-2.133-.712-5.261-2.752-6.316C19.29 14.102 9.004 9.463 9.117 9.4"></svg:path>`,
})
export class ArcticonsInfaktIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfiIcon],svg[arcticons-infi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.152 23.993V43.5m0-19.507l-2.787 2.786m11.147-11.147l-2.787 2.787m11.147 5.574V43.5m0-19.507l-2.787 2.786m-5.573-11.147V43.5m-8.819-2.956a18.97 18.97 0 0 1-8.822-8.89a18.975 18.975 0 0 1 5.337-23.04A19 19 0 0 1 24.036 4.5a18.97 18.97 0 0 1 11.817 4.16a18.97 18.97 0 0 1 6.65 10.616a18.93 18.93 0 0 1-1.405 12.446a18.9 18.9 0 0 1-8.228 8.536"></svg:path>`,
})
export class ArcticonsInfiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinilistIcon],svg[arcticons-infinilist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.308 23.533l-1.934 2.284a2.04 2.04 0 0 1-2.667.352a2.07 2.07 0 0 1-.763-2.58a2.004 2.004 0 0 1 2.427-1.157l16.124 5.702a9.695 9.695 0 1 0-4.117-15.344l-6.483 7.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.872 26.922l-4.457 7.188a9.692 9.692 0 0 1-17.029-9.18a9.82 9.82 0 0 1 12.284-5.004l14.712 5.098a2.876 2.876 0 0 0 3.57-1.73a2.92 2.92 0 0 0-1.455-3.69a2.96 2.96 0 0 0-3.79 1.17l-1.856 2.98m8.694-2.075l4.597-.862m-18.367 2.415l-.526 1.186m5.354.471l-.551 1.19m5.07.174l-.113 1.366m3.671-2.73l1.493 1.464m-3.009-8.176l2.532-6.688m-7.078 7.47l-4.075-4.195m-2.919 14.643l-2.935-3.34m-.049 7.886l-4.392-7.057M15.85 37.21l-1.459-9.413M9.45 35.873l3.141-8.322m-6.635 3.202l5.212-4.258m-4.33-1.672l3.775-.057m.247-3.652l.61.923m3.58-1.572l-.353.97m4.673.225l-.561 1.18m13.795-4.766l-.858-6.897m4.886 8.544l4.664-4.344m-14.217 6.462l-3.46-3.596"></svg:path>`,
})
export class ArcticonsInfinilistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfiniteAlchemyIcon],svg[arcticons-infinite-alchemy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.002 32.686a.66.66 0 0 1-.658.658h-.004a.658.658 0 0 1 0-1.316c.363-.002.66.29.662.654zm1.349-2.733a.832.832 0 1 1-1.663 0a.832.832 0 0 1 1.663 0m4.951 5.17a2.895 2.895 0 0 1-5.79 0a2.895 2.895 0 0 1 2.895-2.89a2.895 2.895 0 0 1 2.892 2.89zm9.813.61c0 .941-.763 1.704-1.705 1.704h0a1.705 1.705 0 0 1-.004-3.41h0a1.705 1.705 0 0 1 1.709 1.702zM25.35 22.186c0 .751-.61 1.36-1.361 1.36h0a1.36 1.36 0 0 1-1.364-1.356v-.004a1.36 1.36 0 0 1 1.36-1.361h0a1.36 1.36 0 0 1 1.365 1.357zm0-5.625c0 .752-.61 1.361-1.361 1.361h0a1.36 1.36 0 0 1-1.364-1.357v-.004c0-.751.609-1.36 1.36-1.36h0a1.36 1.36 0 0 1 1.365 1.357zm0-5.624c0 .752-.61 1.36-1.361 1.36h0a1.36 1.36 0 0 1-1.364-1.356v-.004c0-.751.609-1.36 1.36-1.36h0a1.36 1.36 0 0 1 1.365 1.356zM12.768 34.485c.363 3.572 3.76 6.256 7.548 6.256h7.39a7.56 7.56 0 0 0 7.578-7.435c.034-1.474-.208-2.854-.99-4.17c-3.364.968-6.622-.252-10.482-1.492c-5.477-1.754-11.929-1.864-11.048 6.841zM16.736 4.5c-1.625 0-2.936.975-2.936 2.192s1.311 2.196 2.94 2.196h.276v10.958c-3.806 3.9-7.68 7.083-7.574 13.86c-.032 5.378 4.302 9.762 9.68 9.794h9.646c5.398.008 9.78-4.361 9.79-9.76v-.033c.132-6.778-3.739-9.96-7.55-13.861V8.888h.228c1.629 0 2.94-.982 2.94-2.192c0-1.22-1.311-2.196-2.94-2.196z"></svg:path>`,
})
export class ArcticonsInfiniteAlchemyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfiniteCraftIcon],svg[arcticons-infinite-craft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.935 24c3.887-5.69 8.516-9.49 12.93-8.972c2.772.325 6.635 2.588 6.635 8.972s-3.863 8.647-6.635 8.972c-4.414.517-9.043-3.283-12.93-8.972"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.065 24c-3.887-5.69-8.516-9.49-12.93-8.972C8.363 15.353 4.5 17.616 4.5 24s3.863 8.647 6.635 8.972c4.414.517 9.043-3.283 12.93-8.972"></svg:path>`,
})
export class ArcticonsInfiniteCraftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfiniteLinksIcon],svg[arcticons-infinite-links-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.552 22.218a14.1 14.1 0 0 1 2.552-6.457m0 0l-.886-4.052l3.81 3.81zm19.644 19.644a14.07 14.07 0 0 1-17.243-.593m17.243.593l.24-2.926L40.8 36.29l-4.052-.886m-19.05-2.401a14.07 14.07 0 0 1-3.145-7.22M18.56 14.05a14.07 14.07 0 0 1 18.957-.859m1.802 1.802A14.07 14.07 0 0 1 42.579 24h0a14.07 14.07 0 0 1-4.122 9.95m-17.512-5.583l-7.427 10.624m0 0l10.624-7.427m8.734-15.128L43.5 9.009m0 0l-7.427 10.624M19.967 21.26L4.5 24m0 0l15.467 2.74m-1.048 4.51a12 12 0 0 1-2.237-5.091m0-4.319a12.022 12.022 0 0 1 19.084-7.424m2.327 2.327A12.02 12.02 0 0 1 40.531 24h0c0 6.64-5.382 12.022-12.022 12.022c-2.617 0-5.162-.854-7.25-2.432m7.25-5.947l-2.576-1.067m0 0L24.866 24m0 0l1.067-2.576m0 0l2.576-1.067m0 0l2.576 1.067m0 0L32.152 24m0 0l-1.067 2.576m0 0l-2.576 1.067m6.05 2.407a8.557 8.557 0 0 1-12.1-12.1a8.557 8.557 0 0 1 12.1 12.1m-2.217-2.217a5.421 5.421 0 1 1-7.666-7.667a5.421 5.421 0 0 1 7.666 7.667m1.061 3.292l3.068.838l-.838-3.068m-14.248-9.789l-.838-3.067l3.067.837m13.393 5.548l2.762 1.577l-2.762 1.576M26.932 32.5l1.577 2.762l1.577-2.762m-3.154-16.997l1.577-2.761l1.577 2.761M32.152 24h1.775m0 0h3.137m-5.98-2.576l1.257-1.257m0 0l2.218-2.217m-6.05-2.485V18.6m0 0v1.758m2.576 6.22l1.257 1.256m0 0l2.217 2.217m-6.05-2.407v1.758m0 0v3.135m-2.576-5.96l-1.258 1.258m0 0l-2.217 2.217M24.866 24h-1.758m0 0h-3.135m5.96-2.576l-1.257-1.257m0 0L22.46 17.95m3.845 1.097c.11-1.629 1.065-2.87 2.205-2.87s2.094 1.243 2.204 2.871m0 9.904c-.11 1.628-1.064 2.87-2.204 2.87c-1.142 0-2.096-1.245-2.205-2.876m-2.74-2.741c-1.632-.108-2.879-1.063-2.879-2.205c0-1.14 1.241-2.094 2.87-2.205m9.91 0c1.627.112 2.867 1.066 2.866 2.205s-1.241 2.094-2.87 2.205m-10.004-4.137c-1.081-1.231-1.29-2.791-.48-3.6c.809-.81 2.369-.601 3.6.48m6.993 6.995c1.073 1.23 1.276 2.782.47 3.588c-.809.809-2.368.6-3.599-.48m-3.858-.005c-1.231 1.085-2.795 1.295-3.605.485s-.601-2.369.48-3.6m6.983-6.982c1.23-1.08 2.79-1.289 3.599-.48c.807.806.602 2.36-.472 3.59"></svg:path>`,
})
export class ArcticonsInfiniteLinksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinitePainterIcon],svg[arcticons-infinite-painter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.571 31.833c.417 0 .833-.277 1.25-.555c1.665-.971 3.053-2.36 4.302-3.747c5.829-5.83 10.964-12.353 15.822-19.014c.139-.278.416-.694.555-.972c0-.139 0-.555-.139-.694s-.416-.139-.694-.139c-.139 0-.416.278-.694.417c-1.943 1.388-4.025 2.775-5.968 4.163c-4.996 3.609-9.993 7.356-14.434 11.659c-1.249 1.249-2.36 2.637-3.47 3.886c-.416.416-.555.971-.139 1.527c.694 1.11 1.666 2.22 2.776 3.053c.278.278.417.278.833.416"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.685 27.947c-.416-.139-1.527-.139-1.943 0c-1.527.278-2.776 1.25-3.886 2.36c-.833.971-1.388 2.081-1.943 3.33c-.555 1.666-1.388 3.054-2.915 4.025c-.971.417-1.665.972-2.498 1.527l1.25.833c2.636 1.249 5.55 1.665 8.327.833c3.747-.972 6.523-5.274 7.355-9.16"></svg:path>`,
})
export class ArcticonsInfinitePainterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinitejapaneseIcon],svg[arcticons-infinitejapanese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.706 8.048c-1.746 10.97-1.898 20.7.476 28.939"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.988 13.765a160 160 0 0 0 24.353-1.132m-3.631 4.704c-3.312 9.734-7.69 17.186-14.53 19.173c-8.876 2.58-7.402-5.154-5.24-8.455c4.498-6.863 11.14-7.611 15.005-7.86c10.89-.699 13.399 8.68 10.837 12.505c-2.686 4.012-6.127 5.571-10.241 6.252"></svg:path>`,
})
export class ArcticonsInfinitejapaneseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinitiIcon],svg[arcticons-infiniti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 13.904c-11.321 0-20.5 4.627-20.5 10.336c0 4.62 6.018 8.534 14.32 9.856L24 19.426l6.182 14.67C38.483 32.774 44.5 28.861 44.5 24.24c0-5.708-9.178-10.335-20.5-10.335zm9.414 16.454L24 19.426l-9.379 10.901c-4.618-1.289-7.662-3.546-7.662-6.32c0-4.4 7.571-7.925 17.022-7.925s17.204 3.525 17.204 7.925c0 2.796-3.092 5.067-7.772 6.351z"></svg:path>`,
})
export class ArcticonsInfinitiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinitodeIcon],svg[arcticons-infinitode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.25 13.762l-7.336 6.176l2.647 8.032l5.339.093"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 29.223l9.1-9.285l3.575 1.067l1.068 5.525l-4.364 2.368l-2.693-2.693l-3.018 2.833l6.082 5.199l9.75-4.921l-1.346-11.7l-10.493-6.918L24 18.777l-9.1 9.286l-3.575-1.068l-1.068-5.525l4.364-2.368l2.693 2.693l3.018-2.833l-6.082-5.2l-9.75 4.922l1.346 11.7l10.493 6.918z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.75 34.237l7.336-6.174l-2.647-8.033l-5.339-.092"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.154 17.616l-10.679-1.3L24 24l-7.475 7.684l-10.679-1.3"></svg:path>`,
})
export class ArcticonsInfinitodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinitode2Icon],svg[arcticons-infinitode-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.032 41.067l8.055 1.417L44.5 31.99l-9.699-13.014l-8.734-2.142l-5.04 1.173l-1.806 3.107l6.05-.735l5.521 1.963l5.436 8.943l-2.768 6.436l-4.068.495ZM8.753 22.893L3.5 29.116l4.401 13.48l16.069-1.957l6.287-6.638l1.492-4.938l-1.796-3.222l-2.305 5.578l-4.63 3.961l-10.43.24l-4.08-5.618l1.57-3.774Zm25.195-6.945l-2.771-7.832l-13.683-2.712l-6.422 14.88l2.59 8.744l3.513 3.737l3.708-.045l-3.785-4.784l-1.103-5.907l5.164-9.047l6.936-.755l2.454 3.239Z"></svg:path>`,
})
export class ArcticonsInfinitode2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinityIcon],svg[arcticons-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34.45 30.33a.53.53 0 1 0-.9.56l3.67 5.9a.52.52 0 0 0 .44.25a.54.54 0 0 0 .28-.08a.52.52 0 0 0 .17-.73ZM24 31.31a.52.52 0 0 0-.53.52v6.71a.53.53 0 0 0 1.06 0v-6.71a.52.52 0 0 0-.53-.52m-1.61-15.88a.68.68 0 0 0-.68-.69a.69.69 0 0 0-.69.69a.68.68 0 0 0 .69.68a.67.67 0 0 0 .68-.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.39 17.7a3.37 3.37 0 0 0 3.22 0"></svg:path><svg:path fill="currentColor" d="M26.29 14.74a.68.68 0 0 0-.68.69a.67.67 0 0 0 .68.68a.68.68 0 0 0 .69-.68a.69.69 0 0 0-.69-.69"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.9 17.12a8.93 8.93 0 0 0-17.8 0c-6.63 1-10.6 3.05-10.6 5.44c0 4 10.05 6.08 19.5 6.08s19.5-2.13 19.5-6.08c0-2.39-3.96-4.41-10.6-5.44"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.9 17.12c0 2.25-4.08 4.15-8.9 4.15s-8.9-1.9-8.9-4.15"></svg:path><svg:path fill="currentColor" d="M13.337 30.904a.53.53 0 1 0-.898-.563l-3.694 5.885a.52.52 0 0 0-.032.505a.54.54 0 0 0 .194.216a.52.52 0 0 0 .731-.167z"></svg:path>`,
})
export class ArcticonsInfinityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinityAltIcon],svg[arcticons-infinity-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.012 27.797a3.68 3.68 0 0 0 4.196 0"></svg:path><svg:path fill="currentColor" d="M30.245 23.366a.75.75 0 0 1 .766.75a.758.758 0 0 1-1.516 0a.75.75 0 0 1 .75-.75m-7.655-.116a.75.75 0 0 1 .767.75a.758.758 0 0 1-1.516 0a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.503 7.41a4.103 4.103 0 1 1-4.107 4.108a4.1 4.1 0 0 1 4.107-4.108"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.467 9.313c4.57-.045 2.309 2.863-3.868 4.54s-10.516.427-6.614-1.83m32.931 16.724c-2.253-13.92-22.87-16.777-25.976-.417m-.39 1.579a42.76 42.76 0 0 0 26.668.248c6.463 1.688 5.5 4.212-2.15 5.639s-19.09 1.213-25.554-.475C5.43 33.732 5.88 31.38 12.55 29.91m17.397 8.231a4.063 4.063 0 0 1-7.452.01m-4.551-.418a3.69 3.69 0 0 1-6.618-1.392m29.427-.116a3.478 3.478 0 0 1-6.22 1.41"></svg:path>`,
})
export class ArcticonsInfinityAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinityForLemmyIcon],svg[arcticons-infinity-for-lemmy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.962 26.246c.41-.008.75.322.758.737v.013a.754.754 0 0 1-.759.75a.754.754 0 0 1-.741-.75a.744.744 0 0 1 .738-.75zm4.398.112c.41-.008.75.322.757.737v.013a.754.754 0 0 1-.758.75a.754.754 0 0 1-.742-.75a.744.744 0 0 1 .738-.75z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.503 7.41a4.103 4.103 0 1 1-.01 0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.467 9.313c4.57-.045 2.309 2.863-3.868 4.54s-10.516.427-6.614-1.83m33.233 18.134c-2.005-15.837-23.29-18.713-26.668-.248m9.27 2.021c1.02.69 2.29 1.09 3.69 1.09c1.29 0 2.48-.35 3.46-.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.97 32.08c1.56-.93 2.58-2.48 2.58-4.23c0-.69-.17-1.35-.45-1.96c1.35-.14 2.41-1.12 2.41-2.32c0-1.29-1.23-2.34-2.74-2.34c-1.36 0-2.47.84-2.7 1.94c-.77-.31-1.64-.49-2.56-.49c-.82 0-1.61.14-2.33.4c-.17-1.16-1.31-2.05-2.71-2.05c-1.51 0-2.74 1.05-2.74 2.35c0 1.17 1 2.13 2.3 2.31a4.6 4.6 0 0 0-.55 2.16c0 1.66.92 3.14 2.34 4.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.97 32.08c3.47-.21 6.91-.86 10.25-1.92c6.46 1.68 5.5 4.21-2.15 5.64c-7.65 1.42-19.09 1.21-25.56-.48c-6.08-1.59-5.63-3.94 1.04-5.41c3.03 1.02 6.13 1.7 9.27 2.02"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.115 36.602c-.416 5.221-7.683 5.081-8.438.138m-3.187-.298c-1.564 5.353-8.636 2.547-7.304-1.21m29.344-.297c.21 4.189-5.8 5.882-6.778 1.405m-8.646-8.148l-.019.82"></svg:path>`,
})
export class ArcticonsInfinityForLemmyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinixWalletIcon],svg[arcticons-infinix-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.02 42.5l17.795-17.778a5.377 5.377 0 0 0 .022-7.604l-.022-.023l-10.019-10.01a5.39 5.39 0 0 0-7.62-.013l-.013.013L8.185 21.053a5.377 5.377 0 0 0-.022 7.604l.022.022zl12.748-3.672c1.814-.521 1.992-2.202.903-3.131l-3.38-2.885"></svg:path>`,
})
export class ArcticonsInfinixWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInflowIcon],svg[arcticons-inflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.178 7.279c5.078-.543 11.078.506 15.349 3.341c5.758 3.823 6.74 11.398 1.764 16.285c-3.445 3.383-8.158 5.005-12.902 5.513c-1.127.12-5.52-.22-5.896 0c-2.755 1.621-.786 7.982-5.65 8.426c-2.65.241-5.166-2.444-6.648-4.288c-3.356-4.175-5.169-9.285-4.588-14.67C5.6 12.693 15.023 8.151 23.178 7.279m-6.384 23.164c-5.865-3.088-7.083-10.588-1.63-14.805c5.003-3.869 19.126-4.802 22.535 1.766c2.578 4.967-3.66 6.174-8.407 7.206c-1.717.373-3.238.724-4.077 1.22c-2.523 1.498-3.334 4.365-3.531 6.243"></svg:path>`,
})
export class ArcticonsInflowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfluenceIcon],svg[arcticons-influence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.043 19.219v9.636m5.919 0v-9.636l6.384 9.636v-9.636M13.154 35.36L5.5 24l8.126-11.675M42.5 28.497l-5.601 12.937l-15.069-1.103m.869-32.581l13.884-1.184l5.838 12.622"></svg:path>`,
})
export class ArcticonsInfluenceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfosecIcon],svg[arcticons-infosec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.91 12.061c3.5 14.363 9.92 27.649 15.495 30.918c1.308.767 3.957.666 5.227-.167c7.008-4.597 13.555-24.868 15.431-31.1c.304-1.006-.19-2.277-1.124-2.762c-4.851-2.525-19.577-8.713-33.876.203c-.892.556-1.401 1.886-1.152 2.908Z"></svg:path><svg:path d="M16.57 19.656h15.191c1.04 0 1.882.843 1.882 1.882h0c0 1.04-.843 1.882-1.882 1.882h-15.19a1.88 1.88 0 0 1-1.883-1.882h0c0-1.04.843-1.882 1.883-1.882"></svg:path></svg:g>`,
})
export class ArcticonsInfosecIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfraredremoteIcon],svg[arcticons-infraredremote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.849 20.953L27.098 10.2c-.44-.44-1.332-.26-1.992.4L4.182 31.524c-.66.66-.839 1.552-.399 1.992l10.751 10.751c.44.44 1.332.261 1.992-.399h0L37.45 22.945c.66-.66.839-1.553.399-1.992"></svg:path><svg:circle cx="14.943" cy="33.042" r="2.484" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.171 6.002a10.8 10.8 0 0 1 7.702 3.318h0a10.8 10.8 0 0 1 3.323 7.697m-10.204-7.88a7.115 7.115 0 0 1 7.068 7.077m-6.324-4.147a3.57 3.57 0 0 1 3.302 2.65a2.8 2.8 0 0 1 .089.74"></svg:path><svg:circle cx="26.279" cy="16.303" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.222" cy="22.247" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.25" cy="19.275" r=".75" fill="currentColor"></svg:circle><svg:circle cx="23.307" cy="19.275" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.25" cy="25.218" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26.279" cy="22.247" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.335" cy="22.247" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26.279" cy="28.19" r=".75" fill="currentColor"></svg:circle><svg:circle cx="23.307" cy="25.218" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsInfraredremoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfyMeIcon],svg[arcticons-infy-me-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.675 8.705c.361-1.178-.083-1.595-.599-1.882L33.278 4.71c-.541-.3-1.135-.502-1.592 1.021c-2.192 7.307-4.493 15.152-9.902 21.105c-2.988 3.285-2.375-9.697-2.344-13.872c.008-1.123.125-2.216-1.035-2.704L15.52 9.045c-.454-.192-1.105-.557-1.342.468c-2.24 9.694-5.403 25.498-3.287 28.667c1.5 2.244 3.75 2.272 3.756.206c.01-5.903 1.14-11.661 2.042-17.428c-.144 7.517 2.152 9.087 4.826 9.144c3.548.075 7.547-7.543 8.697-11.437c-1.672 16.249-5.15 23.587 1.213 24.769c1.725.32 1.412-.592 1.407-1.194c-.11-11.627 1.916-20.943 4.843-33.534z"></svg:path>`,
})
export class ArcticonsInfyMeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIngIcon],svg[arcticons-ing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.94 12.85a9.8 9.8 0 0 0 .38 3.79L6 18.35m.3 3.47a16.2 16.2 0 0 1 3.15-1.32M5 27.07a25 25 0 0 1 3.85-2.56m-2.93 5.75a10.3 10.3 0 0 0 .34 3.79M6.61 37a9.3 9.3 0 0 1 1.52-1.24m14.4-4.95a12.1 12.1 0 0 0-4.9 1.79l.79 1.64l1.33-.82S19.53 36 20.7 36s1.1-1.36 1.1-1.36s.83 1.29 1.68 1.29s.79-1.83.79-1.83l1.67 1.33a11.6 11.6 0 0 0 .82-3.19s-1.13-1.43-4.23-1.43m-.32-16.63a9.1 9.1 0 0 0-3.85-.88S15.65 8.43 12 11.15c-3.19 2.4.07 6 1.24 6.44a10.1 10.1 0 0 0 .19 4.58l-1.14-.06a4 4 0 0 0 .82 2.12c.66.56 2.15 1.64 2.08 2.52a4.92 4.92 0 0 0 .67 3.19c.72 1.08 1.73 2.66 1.73 2.66m4.94-1.79v-2.67"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.49 29.15a22.1 22.1 0 0 1 10.17-1.67m-9.48 5.3c1.42-1.35 6-3.94 9.48-5.3m-1.3-14.18c-1.33.72-4.74 2.52-5.08 4.29m6.03-.45a6.5 6.5 0 0 1 1.54-1.8m-3.72 10.24a4.7 4.7 0 0 1 .61-1.07c.24-.19 1.43-1 1.43-1l.14-4.43c-.66-.67-3.34-.5-4-.31c0 0 1.63 2 2.15 2.06s1.84 0 1.84 0m3.23 4.44a9.3 9.3 0 0 0-2.58.52"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21 25.49c-.14 1.58.88 2.65 1.54 2.65m-.33-13.96a9.2 9.2 0 0 1 3.86-.88s2.71-4.87 6.32-2.15c3.19 2.4-.07 6-1.24 6.44a10.1 10.1 0 0 1-.15 4.58l1.14-.06a4 4 0 0 1-.82 2.12c-.66.56-2.15 1.64-2.09 2.52a4.85 4.85 0 0 1-.66 3.19a26 26 0 0 1-1.77 2.28"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.94 29.15a22.1 22.1 0 0 0-10.17-1.67m9.48 5.3c-1.42-1.35-6-3.94-9.48-5.3m1.3-14.18c1.32.72 4.74 2.52 5.08 4.29m-6.03-.45a6.5 6.5 0 0 0-1.54-1.8m3.72 10.24a4.4 4.4 0 0 0-.62-1.07c-.23-.19-1.42-1-1.42-1l-.14-4.43c.66-.67 3.34-.5 4.05-.31c0 0-1.63 2-2.15 2.06s-1.84 0-1.84 0m-3.28 4.44a9.3 9.3 0 0 1 2.58.52"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.44 25.49c.14 1.58-.88 2.65-1.54 2.65M8.66 10.58l.92-1.42l3.63-2.37l1.55-.35l3.7 2.66l.85-1.72l3.19.2l.28 2.24l2.25-.91l3.78-2.57l3.55 1.97m-6.44-2.75l-.52 3.08m9.21.66s.85 2.94 1 3.55a6.6 6.6 0 0 1 .24 1.24m.66 2.46a28.6 28.6 0 0 1 3.08 2.94c.71.8.71 1 .71 1m-3.41.97a34 34 0 0 1 3.92 1.63c.25.28 1.19 1.75 1.19 1.75m0 2.64c.19 1.39 1 4.75 1 5.91m-5.12-5.71A14 14 0 0 0 39.21 31M34 22.9c.19.66.95 2.38 1 2.59m3.02 8.09l.88 1.57l.9.4m-5.35.24a12.3 12.3 0 0 0 2.7 1.84m-5.55-.92a8.6 8.6 0 0 0 1 2m-3.6-.98a8.4 8.4 0 0 0 .51 3.27m-3.85-2a12.5 12.5 0 0 0 .34 2.54m-3.32-2.01c.25.57.18 2.68-.15 2.91M19 39.72a7.8 7.8 0 0 0 .66 2.39m-4.4-4.93c.31.48.92 1.45.71 2.18M12 35.55a6.6 6.6 0 0 0 .1 2.72m-4.89 2.64c.54-.45 2-1.38 2-1.38"></svg:path>`,
})
export class ArcticonsIngIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIngressIcon],svg[arcticons-ingress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.978 14.75v18.5L24 42.5l16.021-9.25v-18.5L24 5.5zM24 5.5v8.022m-8.978 15.889L7.978 33.25m24.999-3.839l7.044 3.839"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 37.269L35.668 17.06H12.332zM12.332 17.06L24 23.796m11.668-6.736L24 23.796m0 13.473V23.796"></svg:path>`,
})
export class ArcticonsIngressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIngressocomIcon],svg[arcticons-ingressocom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.285 17.669h9.43V44.5h-2.723a6.71 6.71 0 0 1-6.707-6.708z"></svg:path><svg:circle cx="24" cy="8.215" r="4.715" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsIngressocomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInkIcon],svg[arcticons-ink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 18.755v10.472m3.217 0v-7.003a3.47 3.47 0 0 1 3.469-3.469h0a3.47 3.47 0 0 1 3.468 3.469v7.003m3.217-10.454v10.472m0-3.648l5.629-6.789m0 10.437l-4.312-5.236"></svg:path>`,
})
export class ArcticonsInkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInklineIconPackIcon],svg[arcticons-inkline-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.196 4.797c1.494 3.138 4.732 9.315 0 12.154s-17.782 5.827-15.092 12.153c-3.935-2.79-6.027-11.506 0-14.693s13-5.38 15.092-9.613m-2.341 17.034c.897.747.847 1.992-.946 2.939s-9.912 2.54-9.912 9.364c0 4.134 2.988 6.226 2.988 6.226c-1.345-3.487 11.207-9.663 11.207-14.594c0-4.533-3.337-3.935-3.337-3.935"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.855 21.832c-2.092.299-6.614 4.047-11.201 2.048m-1.55 5.224c1.544.946 3.18.836 3.18.836"></svg:path><svg:circle cx="23.28" cy="42.453" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsInklineIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInkredibleIcon],svg[arcticons-inkredible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.538 34.45c4.542-2.304 4.542-2.342 6.613-2.682c-.945 1.254-2.022 2.048-1.587 4.497c2.566.533 5.018-1.463 7.255-2.215c-.672.87-1.76 2.664-.434 3.023c1.118.102 1.587-.204 2.245-.389m4.036-3.114l-2.834 2.043l.92-3.325"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.797 22.187l-8.13 11.382l-1.916-1.28l7.34-11.829m0 0l7.4-10.384c.978.101 1.495.522 1.841 1.147l-6.535 10.964zm8.66-8.15c.318 2.677-2.412 6.944-3.546 9.086"></svg:path>`,
})
export class ArcticonsInkredibleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInkredibleProIcon],svg[arcticons-inkredible-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 36.927c5.402-2.741 5.402-2.786 7.865-3.19c-1.124 1.491-2.405 2.435-1.888 5.347c3.052.634 5.968-1.739 8.629-2.633c-.8 1.034-2.094 3.168-.517 3.595a5.7 5.7 0 0 0 2.67-.462m4.8-3.705l-3.371 2.43l1.093-3.954"></svg:path><svg:path d="m35.728 22.343l-9.67 13.536l-2.277-1.524L32.51 20.29m0 0l8.801-12.35c.922.026 1.76.548 2.189 1.364l-7.772 13.04zm10.299-9.693c.377 3.184-2.869 8.259-4.217 10.806"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="11.847" cy="14.623" r="5.347"></svg:circle><svg:path d="M10.587 17.678v-6.111h2c1.132 0 2.049.919 2.049 2.052s-.917 2.053-2.048 2.053h-2.001"></svg:path></svg:g>`,
})
export class ArcticonsInkredibleProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInmageIcon],svg[arcticons-inmage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 1 2.5 24A21.503 21.503 0 0 1 24 2.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M16.517 15.499h14.966a1.02 1.02 0 0 1 1.018 1.018v14.966a1.02 1.02 0 0 1-1.018 1.018H16.517a1.02 1.02 0 0 1-1.018-1.018V16.517a1.02 1.02 0 0 1 1.018-1.018Z"></svg:path>`,
})
export class ArcticonsInmageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInnertuneIcon],svg[arcticons-innertune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.352 31.41c-.645-.35-1.408-.387-2.137-.39H9.99c-4.59.088-7.066 5.53-4.385 9.18c.036.05.097.13.135.178c2.71 3.404 8.384 2.362 9.871-1.658c.022-.058.055-.153.074-.211c.656-2.024.24-4.698.225-6.82v-13.68c0-.462.38-.826.83-.928c3.236-.733 3.602-5.72.06-6.658a5 5 0 0 0-.218-.051c-2.21-.454-3.87 1.281-4.123 3.338c-.007.061-.017.16-.022.222c-.164 1.825.003 3.75.01 5.585v11.839c0 .061-.043.085-.097.056Zm19.535-3.44c-1.762-.536-3.514-.59-5.158.35c-.053.03-.14.082-.192.115c-3.026 1.897-3.475 6.54-.88 8.987l.166.15c3.012 2.611 8.162 1.4 9.341-2.536c.018-.06.045-.156.06-.215c.59-2.248.243-4.939.232-7.264V15.04c0-1.044.838-2.004 1.873-2.145c1.834-.251 3.71-.578 4.961-1.466c.05-.036.128-.1.172-.142c1.827-1.76 1.15-5.88-1.31-5.705a4 4 0 0 0-.223.024c-5.647.686-11.65 1.683-17.314 2.758l-.219.043c-2.89.67-3.253 5.61-.446 6.372c.06.017.158.023.22.017c3.424-.324 5.49-.63 6.737-.884c1.085-.22 1.907.26 1.922 1.382l.163 12.598c.001.062-.046.097-.105.079Z"></svg:path>`,
})
export class ArcticonsInnertuneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInnovestxIcon],svg[arcticons-innovestx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="9.271" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27 14.772L29.974 3.85m2.05 14.19l8.985-6.85m-7.291 14.974l10.77 1.738M16.155 29.71L7.4 36.335"></svg:path>`,
})
export class ArcticonsInnovestxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInoreaderIcon],svg[arcticons-inoreader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.596" cy="17.316" r="7.142" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInoreaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInpostMobileIcon],svg[arcticons-inpost-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M25.62 37.423L21.312 43.5m-.748-12.002l-6.618 3.405m4.857-10.922l-7.44.001m9.295-7.482l-6.622-3.398m11.816-2.509L21.568 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.712 28.495l2.872-1.3c-5.108-2.82-2.985-12.905 7.053-16.07a13.051 13.051 0 1 0 0 25.891c-3.761-1.314-7.989-2.742-9.925-8.52"></svg:path>`,
})
export class ArcticonsInpostMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInpsMobileIcon],svg[arcticons-inps-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.344 26.09c-6.286 4.21-19.283.996-25.954-4.437c-4.593-3.74-5.654-8.443-.286-8.017c11.154.884 16.326 8.894 18.046 14.281m8.151-1.784l-7.962 7.271c-4.288 3.914-10.144 3.905-16.937 1.895C11.285 33.49.583 26.68 5.97 16.557c1.087-2.045 7.297-7.053 20.29-4.459c5.301 1.058 10.26 3.408 13.02 5.403c2.487 1.797 6.133 5.791 3.021 8.632"></svg:path>`,
})
export class ArcticonsInpsMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInputbridgeIcon],svg[arcticons-inputbridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.354 24h-9.009m9.01 0c3.014 0 5.457 2.352 5.457 5.249c0 2.9-2.446 5.251-5.458 5.251h-9.009v-21h9.01c3.014 0 5.457 2.352 5.457 5.252c0 2.896-2.446 5.248-5.458 5.248M14.187 13.5v21"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsInputbridgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInsaDticketIcon],svg[arcticons-insa-dticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M5.5 24h37m-21.007 6.231v5.258m-4.881-5.258h3.484m-1.742 5.258v-5.258m17.663 0H39.5m-1.742 5.258v-5.258"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.471 33.726v.021c0 .962-.78 1.742-1.741 1.742h0c-.962 0-1.742-.78-1.742-1.742v-1.774c0-.962.78-1.742 1.742-1.742h0c.962 0 1.741.78 1.741 1.742v.021m5.594.866h1.714m.915 2.629h-2.629v-5.258h2.629M8.5 35.49v-5.26h1.183a2.3 2.3 0 0 1 2.3 2.3v.658a2.3 2.3 0 0 1-2.3 2.3zm4.754-2.63h2.629m11.943-2.629v5.258m0-1.831l2.826-3.409m0 5.24l-2.165-2.629M15.366 12.925l-2.144 8m2.394 0l2.143-8l3.157 8l2.143-8m.151 7.124c.32.638.871.876 1.727.876h1.184c1.102 0 2.235-.893 2.53-1.996l.003-.008c.295-1.102-.359-1.996-1.461-1.996h-1.306c-1.104 0-1.759-.894-1.463-1.998h0c.296-1.105 1.433-2.002 2.539-2.002h1.178c.855 0 1.407.238 1.726.877m3.028 7.123h-3.417M27.636 24l6.636-11.075l.506 8"></svg:path><svg:circle cx="16.105" cy="9.577" r="1.633" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInsaDticketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInshareIcon],svg[arcticons-inshare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.398 29.816l-6.205-3.062h0a5.17 5.17 0 1 1 1.276-2.328h0l5.803 2.954h0a5.617 5.617 0 1 1-.874 2.436"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.51 22.137l5.93-3.253h0a4.025 4.025 0 1 0-1.204-2.273h0l-5.886 3.187"></svg:path>`,
})
export class ArcticonsInshareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInshortsIcon],svg[arcticons-inshorts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="38.5" cy="38.5" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.5" cy="38.5" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="38.5" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.5" cy="9.5" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5a4 4 0 0 1 0 8H9.5a4 4 0 0 1 0-8Z"></svg:path><svg:circle cx="38.5" cy="23.278" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="23.278" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInshortsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInshotIcon],svg[arcticons-inshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.611h28.889a4.01 4.01 0 0 1 4 4v18.097m4.111 6.681H13.611a4.01 4.01 0 0 1-4-4v-18.2m0-6.578V5.5m28.778 32.889V42.5"></svg:path>`,
})
export class ArcticonsInshotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInsidecflIcon],svg[arcticons-insidecfl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.157 17.072H15.368c-1.384 0-2.186.376-2.805 1.334l-3.142 4.869c-.77 1.193-.539 2.21 1.077 2.21h7.136"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.04 20.334l-6.904.01l-3.297 5.208m15.278-8.466l-5.46 8.394h9.346"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 29.98V12.4c0-2.477 1.57-3.795 3.795-3.795h31.437c2.544 0 3.768 1.574 3.768 3.768v18.04c0 2.073-1.27 3.663-3.663 3.663H32.94L22.415 41.11c-1.139.762-1.992-.14-1.351-1.127l3.831-5.907H8.377C5.9 34.076 4.5 32.65 4.5 29.98"></svg:path>`,
})
export class ArcticonsInsidecflIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInsightTimerIcon],svg[arcticons-insight-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.675 14.582c1.232-.899 10.588-1.549 21.091-1.467c10.504.083 18.33.868 17.644 1.77c-.686.903-9.633 1.594-20.173 1.56c-10.54-.036-18.831-.785-18.694-1.69zm38.498 3.952c-1.875.796-10.192 1.36-19.701 1.338s-17.448-.625-18.807-1.429"></svg:path><svg:path d="M4.564 14.768s-1.02 11.208 5.095 16.118c0 0 3.866 3.978 14.308 3.983c10.517.37 14.374-3.983 14.374-3.983c6.114-4.91 5.095-16.118 5.095-16.118"></svg:path></svg:g>`,
})
export class ArcticonsInsightTimerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInspodIcon],svg[arcticons-inspod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.522 25.495v4.488a13.522 13.522 0 0 1-27.043 0l.13-5.482m12.323-7.711a12.295 12.295 0 0 1 24.59 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.545 31.333a6.193 6.193 0 0 1 12.387 0m0-15.758v27.883M5.61 24.5a6.161 6.161 0 0 1 12.322 0m0-7.71a12.295 12.295 0 1 1 14.724 12.051m-7.065-7.987v21.048"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.591 20.854A12.293 12.293 0 0 1 37.886 8.563q.6 0 1.186.056m-6.55 16.569a9.696 9.696 0 0 1 9.697-9.694m-28.385 3.137a2.63 2.63 0 0 1 3.944-1.585"></svg:path>`,
})
export class ArcticonsInspodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstaboxIcon],svg[arcticons-instabox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.412 39.326l15.326-15.327m.002-15.324c-4.233-4.233-11.095-4.233-15.328 0L7.087 24l15.325 15.325c4.233 4.233 11.094 4.233 15.327 0c4.232-4.232 4.231-11.094 0-15.325c4.231-4.232 4.232-11.093 0-15.325m.001 0L14.75 31.664m7.662-22.989l7.664 7.663"></svg:path>`,
})
export class ArcticonsInstaboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstabridgeIcon],svg[arcticons-instabridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.592 26.396a9.98 9.98 0 0 0-8.92 1.948v.035m6.348 4.085a4 4 0 1 0 4 4h0a4 4 0 0 0-4-4m7.279-14.087a19.62 19.62 0 0 0-19.761 3.086M42.5 14.204c-10.731-8.89-26.268-8.89-37 0m23.6 11.401h7.778c.295 0 .534.24.534.534v5.749a.534.534 0 0 1-.534.534H29.1a.534.534 0 0 1-.534-.534v-5.749c0-.295.239-.534.534-.534"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.062 25.605v-2.46a2.925 2.925 0 0 1 5.85 0"></svg:path><svg:circle cx="32.987" cy="29.014" r="1.134" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInstabridgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstabridgeHomeAppIcon],svg[arcticons-instabridge-home-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.472 19.394H21.256a.52.52 0 0 0-.519.534c.1 2.112.795 4.06 1.898 5.716a.25.25 0 0 1-.206.394h-3.082a.407.407 0 0 0-.408.423a6.44 6.44 0 0 0 1.306 3.473c.152.2-.001.486-.252.486h-3.748c-.267 0-.493.226-.469.492a5.295 5.295 0 0 0 4.78 4.78c.266.024.491-.202.491-.47v-3.747c0-.25.287-.404.487-.252a6.44 6.44 0 0 0 3.473 1.306a.407.407 0 0 0 .423-.408v-3.082a.25.25 0 0 1 .394-.206a11.24 11.24 0 0 0 5.716 1.898a.52.52 0 0 0 .534-.52V19.997a.6.6 0 0 0-.602-.602"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.687 42.415H11.313A5.813 5.813 0 0 1 5.5 36.602V21.416a8.91 8.91 0 0 1 3.935-7.393L20.28 6.72a6.66 6.66 0 0 1 7.438 0l10.846 7.303a8.91 8.91 0 0 1 3.935 7.393v15.186a5.813 5.813 0 0 1-5.813 5.813"></svg:path>`,
})
export class ArcticonsInstabridgeHomeAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstacartIcon],svg[arcticons-instacart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.56 3.55c1.08 0 6 .45 6 4.41s-6 8.58-7.5 8.58S28 11.48 28 9s.3-5.45 4.56-5.45m.1 25.09C24.23 37 8.7 43.76 7.31 42.37S12.62 25.46 21.05 17c1.3-1.3 5-2.93 9.76 1.82s3.15 8.51 1.85 9.8Zm6-7.23c-1.81 0-5.57-1.22-5.57-2.32s3.43-5.57 6.37-5.57s3.27 3.66 3.27 4.46c0 3.19-2.27 3.44-4.07 3.44Z"></svg:path>`,
})
export class ArcticonsInstacartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstaddrIcon],svg[arcticons-instaddr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.23 16.406h24.53V35.19H11.23z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.76 16.406L23.758 27.883L11.23 16.406m23.273-5.708l-1.05 3.13h-4.17M27.927 42.5l-2.604-2.615l2.604-2.604M6.526 22.139l4.704-.514v4.693m11.204 13.567H10.18q-2.079 0-2.604-1.04"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.274 36.756q-2.351-4.179-.788-6.783l5.482-8.097m26.619-.776l4.957 8.873q1.04 2.089.262 3.917m-.787 1.816q-1.565 4.18-4.694 4.18H25.837M14.119 16.154l4.42-7.32q1.039-1.828 2.342-2.614m1.706-.547c2.342-.504 4.554.062 6.127 2.122c1.173 1.536 4.738 6.032 4.738 6.032"></svg:path>`,
})
export class ArcticonsInstaddrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstagrabberIcon],svg[arcticons-instagrabber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.053" d="M24 35.441a1.22 1.22 0 0 1-.966-.476l-7.554-9.846a1.217 1.217 0 0 1 .966-1.957h2.996l-6.632-8.645a1.217 1.217 0 0 1 .966-1.957h20.448a1.218 1.218 0 0 1 .966 1.957l-6.632 8.645h2.996a1.218 1.218 0 0 1 .966 1.957l-7.554 9.846a1.22 1.22 0 0 1-.966.476"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsInstagrabberIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstagramIcon],svg[arcticons-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="35.35" cy="12.65" r="2.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="8.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInstagramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstagramDownloaderIcon],svg[arcticons-instagram-downloader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="38.5" cy="38.499" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.432 43.326A21.4 21.4 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24c0 3.383-.781 6.583-2.173 9.43M38.5 42.499v-8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.203 39.203l3.297 3.296l3.297-3.296M35.38 10.46a2.19 2.19 0 1 0 2.16 2.22v-.06a2.18 2.18 0 0 0-2.16-2.16M24 15.72A8.28 8.28 0 1 0 32.28 24h0A8.28 8.28 0 0 0 24 15.72"></svg:path>`,
})
export class ArcticonsInstagramDownloaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstagramLiteIcon],svg[arcticons-instagram-lite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4C5.784 4 4 5.784 4 8v29c0 2.216 1.784 4 4 4h23.272A7 7 0 0 1 30 37a7 7 0 0 1 11-5.742V8c0-2.216-1.784-4-4-4z"></svg:path><svg:circle cx="33.85" cy="11.15" r="2.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="22.5" cy="22.5" r="8.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37" cy="37" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35 33v8h4"></svg:path>`,
})
export class ArcticonsInstagramLiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstagramThreadsIcon],svg[arcticons-instagram-threads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.95 16.332c2.077-2.076 3.948-2.943 6.732-2.943s9.128.98 8.245 11.085c-.883 10.104-7.138 9.777-8.245 9.777c-4.115 0-7.385-1.667-7.385-5.853c0-5.752 6.638-6.05 8.861-6.05c5.428 0 14.42 1.652 14.42 10.726c0 11.053-12.98 12.426-16.349 12.426c-8.11 0-18.639-4.12-18.639-22.203S19.184 2.5 24.682 2.5s13.264.801 17.728 12.818"></svg:path>`,
})
export class ArcticonsInstagramThreadsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstalateIcon],svg[arcticons-instalate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.73 12.5v23h11.5m-24.46 0h5m-5-23h5m5.46 0h5m9 17.49v5.51m-21.96-23v23m7.96 0h2.5"></svg:path>`,
})
export class ArcticonsInstalateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstallWithOptionsIcon],svg[arcticons-install-with-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.584 14.306v9.71h-8.01l10.41 10.387l10.41-10.387h-8.009v-9.71zM21.74 45.4a21.5 21.5 0 0 1-11.895-5.18m-3.057-3.288A21.5 21.5 0 0 1 2.5 25.156m.228-4.483A21.5 21.5 0 0 1 7.767 9.86m3.286-3.057A21.5 21.5 0 0 1 21.74 2.6m4.482 0C37.179 3.746 45.5 12.983 45.5 24h0c0 11.015-8.318 20.251-19.272 21.4"></svg:path>`,
})
export class ArcticonsInstallWithOptionsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstallerxIcon],svg[arcticons-installerx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.435 38.784H23.64l-6.974-7.581zm19.361-.551L5.5 15.043h19.055l10.43 11.57zm.395-24.574l9.468 10.614V9.216h-6.446zm12.003-2.935v4.154H42.5z"></svg:path>`,
})
export class ArcticonsInstallerxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstamocksIcon],svg[arcticons-instamocks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.268 29.968S9.57 34.85 10.688 43.5h6.488"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.824 43.5s3.729-15.958 3.729-19.164S33.956 14.269 24 4.5c-9.956 9.769-10.553 16.63-10.553 19.836S17.176 43.5 17.176 43.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.732 29.968s4.698 4.882 3.58 13.532h-6.488"></svg:path><svg:circle cx="24" cy="38.869" r="2.124" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.196 9.853c1.336.864 2.995 1.363 4.804 1.363s3.468-.5 4.805-1.363"></svg:path>`,
})
export class ArcticonsInstamocksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstantGamingIcon],svg[arcticons-instant-gaming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4m6.59 6.492l-2.543 1.452m13.337 7.802l-.765.437m-1.852 1.057l-1.883 1.076m-2.14 1.222l-5.739 3.277c-.52.296-.957.92-.957 1.517v4.775c0 .328-.086 1.034.37 1.297s.974-.027 1.258-.19l19.94-11.464c.599-.345.67-1.264-.074-1.68l-10.868-6.08c-1.248-.698-1.668-.493-2.727.111l-7.9 4.51"></svg:path>`,
})
export class ArcticonsInstantGamingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstapaperIcon],svg[arcticons-instapaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M21.3 33h5.4m-5.4-18h5.4M24 15v18"></svg:path>`,
})
export class ArcticonsInstapaperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstapayIcon],svg[arcticons-instapay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.36 15.869l4.546 7.887l-9.278 8.322m-1.874-16.21l4.547 7.888l-9.278 8.322m21.099-14.913h8.13c2.81 0 4.669 1.96 4.166 4.397c-.504 2.436-3.173 4.397-5.984 4.397h-9.762l-1.896 6.173M9.383 16.016l-.936 3.087m-.995 3.287L4.5 32.132"></svg:path>`,
})
export class ArcticonsInstapayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstlifeIcon],svg[arcticons-instlife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="4.4" d="M6.116 32.255c-1.124-.39-2.61-1.637-2.61-2.19c0-.134.805-.222 2.041-.222c4.4 0 6.927-1.498 9.747-5.78c2.079-3.157 4.204-4.313 8.042-4.375l2.34-.038l1.113-1.113c2.234-2.234 4.874-3.207 8.658-3.19c2.767.013 4.189.388 6.079 1.608c2.628 1.695 3.588 4.239 2.598 6.88c-1.281 3.417-5.505 5.79-10.307 5.79c-3.907 0-6.873-1.382-8.49-3.958l-.498-.793l-1.155.208c-1.7.306-4.252 1.205-5.576 1.966c-.639.367-1.91 1.369-2.825 2.227c-1.898 1.78-3.113 2.554-4.799 3.056c-1.539.458-2.885.435-4.358-.077z"></svg:path>`,
})
export class ArcticonsInstlifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstrumentTunerIcon],svg[arcticons-instrument-tuner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.144 5.5L17.428 27.485c-1.665 1.956.296 3.626.296 3.626M40.067 8.84L21.351 30.824c-1.665 1.956-3.626.286-3.626.286m0 0l-8.083 9.495"></svg:path><svg:circle cx="8.88" cy="41.553" r=".947" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInstrumentTunerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInsularIcon],svg[arcticons-insular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.47 7.88H8.53L4.5 34.53h39zm-30.94 0L43.5 34.53M14.61 7.88l28.1 21.41M20.7 7.88l21.22 16.17M26.78 7.88l14.34 10.93M32.87 7.88l7.46 5.69M7.9 12.04l29.52 22.49M7.27 16.2l24.06 18.33M6.64 20.35l18.61 14.18M6.02 24.51l13.14 10.02M5.39 28.67l7.69 5.86m28.44 5.59H6.48L4.5 34.53h39z"></svg:path>`,
})
export class ArcticonsInsularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInsyncIcon],svg[arcticons-insync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.91 23.8l-5.551-2.804a.59.59 0 0 1-.326-.53v-5.92c0-.211.113-.407.297-.513L23.703 4.58a.59.59 0 0 1 .594 0l16.373 9.453a.6.6 0 0 1 .297.514v6.533m-6.091 3.908l5.758 2.805c.204.1.333.307.333.534v5.126a.6.6 0 0 1-.297.514L24.297 43.42a.6.6 0 0 1-.594 0L7.33 33.967a.6.6 0 0 1-.297-.514v-6.14m11.977-6.156l9.98 5.686"></svg:path>`,
})
export class ArcticonsInsyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntactIcon],svg[arcticons-intact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.696 27.196c-.325.65-1.083 1.083-1.842 1.083h0a2.173 2.173 0 0 1-2.167-2.167v-1.408c0-1.192.975-2.167 2.167-2.167h0c.758 0 1.517.434 1.842 1.084m-6.176 2.546c0 1.191-.974 2.166-2.166 2.166s-2.167-.975-2.167-2.166v-1.409c0-1.191.975-2.166 2.167-2.166s2.167.975 2.167 2.166m0 3.575v-5.85m-7.367-1.733v6.5c0 .65.433 1.083 1.083 1.083h.326m-2.601-5.85h2.384m15.167-1.787v6.5c0 .65.433 1.083 1.083 1.083h.325m-2.6-5.85h2.383"></svg:path><svg:circle cx="10.296" cy="19.883" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.296 22.483v5.85m7.042 0v-3.575c0-1.191-.976-2.166-2.167-2.166s-2.167.975-2.167 2.166m0 3.575v-5.85m25.079-9.316H43.5v21.666h-5.417M9.917 13.167H4.5v21.666h5.417"></svg:path>`,
})
export class ArcticonsIntactIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntelUnisonIcon],svg[arcticons-intel-unison-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.911 14.544l19.733 11.512V42.5L5.911 30.989zM21.95 9.206l13.156 7.4V27.7L21.95 20.3zM33.45 5.5l8.639 4.933v6.578l-8.628-4.933z"></svg:path>`,
})
export class ArcticonsIntelUnisonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInteliusSearchIcon],svg[arcticons-intelius-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.433 11.002c-7.621 9.555-5.46 18.246-4.485 26.59Q25.696 21.637 31.996 5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.948 37.592L28.396 42.5c-4.169-7.597-8.774-15.585-20.829-17.859c16.79-1.234 23.976 5.196 28.38 12.951"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.567 14.863v9.778c11.628-.068 20.424-10.06 24.43-19.141c-5.974 6.196-13.252 10.874-24.43 9.363"></svg:path>`,
})
export class ArcticonsInteliusSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntellectIcon],svg[arcticons-intellect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.067 33.365c0-5.597-10.134-23.347-10.134-23.347S8.798 27.768 8.798 33.365a10.135 10.135 0 1 0 20.27 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.98 37.924a10 10 0 0 0 1.087.058a10.135 10.135 0 0 0 10.135-10.135C39.202 22.25 29.067 4.5 29.067 4.5s-3.53 6.184-6.424 12.402"></svg:path>`,
})
export class ArcticonsIntellectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntellicareAgoraIcon],svg[arcticons-intellicare-agora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.394 6.018a3.86 3.86 0 0 0-1.931 3.344v29.27c.001 2.973 3.22 4.83 5.794 3.345l25.348-14.634c2.576-1.487 2.576-5.205 0-6.692L13.257 6.017a3.86 3.86 0 0 0-3.863 0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.98 7.432l24.831 14.335l-17.624 10.174"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.025 22.063L15.188 36.401V16.053"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.326 42.5V13.823l17.623 10.174"></svg:path>`,
})
export class ArcticonsIntellicareAgoraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntelligentCvIcon],svg[arcticons-intelligent-cv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.719 40.313h-2.2v-4.4h2.2m-2.2 2.2h1.434m20.248 2.2H35v-4.4h2.2m-2.2 2.2h1.434m-24.193.756l1.44 1.443m-2.88.001v-4.4h1.44c.814 0 1.474.662 1.474 1.478s-.66 1.478-1.474 1.478h-1.44m13.278-2.956v2.943a1.458 1.458 0 1 0 2.915 0v-2.943M19.45 39.83c.27.352.608.482 1.079.482h.65c.607 0 1.099-.491 1.099-1.097v-.005c0-.606-.492-1.098-1.098-1.098h-.72a1.1 1.1 0 0 1-1.097-1.099h0a1.1 1.1 0 0 1 1.099-1.101h.65c.47 0 .809.13 1.079.482m6.605 3.914v-4.396l2.2 4.4l2.201-4.394v4.394m-20.983-8.73h7.836m-7.836-3.405h7.836m-7.836-3.404h7.836m2.492 4.87h13.07m-13.07-4h13.07m-13.07-4h13.07m-13.07-4h13.07m-13.07-4h13.07m-23.4-1.383h7.837v9.444h-7.836zM9.747 32.848V9.873h28.51v22.975m4.273-.726c-4.99 1.046-11.627 1.63-18.529 1.63s-13.538-.584-18.53-1.63M9.5 5.5h29c2.217 0 4 1.784 4 4v29c0 2.216-1.783 4-4 4h-29c-2.215 0-4-1.784-4-4v-29c0-2.216 1.785-4 4-4"></svg:path>`,
})
export class ArcticonsIntelligentCvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntentinterceptIcon],svg[arcticons-intentintercept-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="13.25" r="1.697" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 18.455v17.992"></svg:path>`,
})
export class ArcticonsIntentinterceptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInterIcon],svg[arcticons-inter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.62 24.332a2.88 2.88 0 0 1 2.88-2.88h0m-2.881 0v7.633"></svg:path><svg:circle cx="11.373" cy="18.923" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.696 19.075v8.57c0 .796.645 1.44 1.44 1.44h.433m-1.873-7.633h1.873m-15.069 0h1.873v7.633m8.561.001v-4.754a2.88 2.88 0 0 0-2.88-2.88h0a2.88 2.88 0 0 0-2.881 2.88v4.753m-.001-4.753v-2.88m18.297 6.18a2.88 2.88 0 0 1-2.503 1.453h0a2.88 2.88 0 0 1-2.881-2.88v-1.873a2.88 2.88 0 0 1 2.88-2.88h0a2.88 2.88 0 0 1 2.881 2.88v.936h-5.761"></svg:path>`,
})
export class ArcticonsInterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInterProfileSharingIcon],svg[arcticons-inter-profile-sharing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.058 29.825a7.444 7.444 0 1 1 10.405-.219"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.07 29.747c.476-2.202 2.427-3.736 4.815-3.783c2.388-.048 4.654 1.402 5.591 3.577"></svg:path><svg:circle cx="13.127" cy="22.409" r="2.842" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.683 20.697l7.848-5.503m-6.854 12.109l7.848 5.504m1.11-14.432a7.444 7.444 0 1 1 10.406-.218"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.648 18.297c.475-2.202 2.427-3.736 4.815-3.783c2.387-.047 4.654 1.403 5.59 3.577"></svg:path><svg:circle cx="34.705" cy="10.96" r="2.842" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.76 42.5a7.444 7.444 0 1 1 10.406-.218"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.773 42.422c.475-2.202 2.427-3.736 4.815-3.783c2.387-.048 4.654 1.402 5.591 3.576"></svg:path><svg:circle cx="34.83" cy="35.084" r="2.842" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInterProfileSharingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInteractiveWallpapersIcon],svg[arcticons-interactive-wallpapers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.446 12.294L15.064 33.74a1.966 1.966 0 0 0 1.703 2.95H41.53a1.966 1.966 0 0 0 1.703-2.95L30.852 12.294a1.966 1.966 0 0 0-3.406 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.976 23.5l-3.446-5.97a1.966 1.966 0 0 0-3.406 0L4.766 33.74a1.966 1.966 0 0 0 1.703 2.95h10.298m.156-6.17h7.515m-4.104-5.909h8.073m8.508-1.816a4.576 4.576 0 1 0-4.027-6.971"></svg:path>`,
})
export class ArcticonsInteractiveWallpapersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInterbankIcon],svg[arcticons-interbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 38.5c0 2.216-1.784 4-4 4h-33v-33c0-2.216 1.784-4 4-4h33z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.1 11.05l-22.2 3.7v22.2l22.2-3.7z"></svg:path>`,
})
export class ArcticonsInterbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInterceptXIcon],svg[arcticons-intercept-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.439 26.184L11.488 41.482M36.516 6.521L25.89 21.363M14.109 4.906l24.775 34.608M9.507 8.119l24.857 34.722"></svg:path>`,
})
export class ArcticonsInterceptXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntercepterNgIcon],svg[arcticons-intercepter-ng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="25.759" cy="24" r="7.706" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.18 24a15.818 15.818 0 0 0 27.158 0m0 0a15.818 15.818 0 0 0-27.159 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.32 24a9 9 0 0 0-.355-2.484l4.294-2.861l-2.094-3.807l-5.723 1.406a15.2 15.2 0 0 0-3.205-2.102l.869-5.142l-4.76-1.46l-3.677 4.73c-.303-.013-.603-.035-.91-.035s-.607.022-.91.035l-3.678-4.73l-4.76 1.46l.869 5.142a15.2 15.2 0 0 0-3.205 2.102l-5.722-1.406l-2.094 3.807l4.294 2.86a8.86 8.86 0 0 0 0 4.97l-4.294 2.86l2.094 3.807l5.722-1.406a15.2 15.2 0 0 0 3.205 2.102l-.868 5.142l4.759 1.46l3.678-4.73c.302.013.602.034.91.034s.607-.021.91-.034l3.678 4.73l4.759-1.46l-.868-5.142a15.2 15.2 0 0 0 3.205-2.102l5.722 1.406l2.094-3.807l-4.294-2.86A9 9 0 0 0 41.32 24"></svg:path>`,
})
export class ArcticonsIntercepterNgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInternetSpeedMeterIcon],svg[arcticons-internet-speed-meter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.164 32.946V15.148M38 22.964l-5.835-7.91l-5.836 7.91m-10.493-7.91v17.798m5.835-7.816l-5.835 7.91L10 25.036"></svg:path>`,
})
export class ArcticonsInternetSpeedMeterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInternshalaIcon],svg[arcticons-internshala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-23.073 10v17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.647 30.637c1.042 1.357 2.35 1.863 4.168 1.863h2.517a4.24 4.24 0 0 0 4.24-4.24v-.02a4.24 4.24 0 0 0-4.24-4.24h-2.776a4.245 4.245 0 0 1-4.246-4.245h0a4.255 4.255 0 0 1 4.255-4.255h2.503c1.818 0 3.126.506 4.168 1.863"></svg:path>`,
})
export class ArcticonsInternshalaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInterpalsIcon],svg[arcticons-interpals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.805 8.23c-8.667.001-15.693 7.027-15.694 15.695c0 8.667 7.027 15.693 15.694 15.694a15.7 15.7 0 0 0 8.05-2.255l1.923.708l4.614 1.698l-1.698-4.614l-.573-1.56a15.7 15.7 0 0 0 3.38-9.672c-.002-8.667-7.028-15.693-15.695-15.694z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.181 11.557c-4.325 2.55-6.989 7.266-6.99 12.368c.008 2.41.612 4.778 1.756 6.885l-1.104 2.104L4.5 35.471l5.085-1.149a14 14 0 0 0 2.596 1.972M24.007 8.697s4.309 1.881 3.369 4.487c-.64 1.77-1.653 1.925-.835 3.56c.817 1.634-.129 3.806 2.364 4.872c1.942.832 3.036 1.478 4.546 3.62c.853 1.68 7.642 5.786 3.898 0c-1.584-2.447.558-2.674 1.126-3c.274-.158 1.834.937 2.154 0c.343-1.009 2.023-2.348 1.86-3.851"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.37 37.748c2.823-1.897 3.254-1.777 2.499-3.068c-.956-1.636.716-3.705.324-4.9s-.836-3.208-2.508-2.946s-.01-.26-1.851-1.791c-1.842-1.531-2.772.396-3.402-1.118c-.675-1.619-2.657 3.86-3.322 0"></svg:path>`,
})
export class ArcticonsInterpalsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInterstellarIcon],svg[arcticons-interstellar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.673 36.283a7.15 7.15 0 0 1-2.111-2.275c-3.308-5.728 2.266-15.137 12.45-21.017s21.119-6.002 24.426-.274q0 0 0 0h0c3.308 5.728-2.266 15.138-12.45 21.017c-4.656 2.689-9.712 4.287-14.153 4.473"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.02 18.044c.714 3.641-2.766 8.58-8.294 11.772c-6.364 3.675-13.192 3.764-15.25.2c-1.165-2.019-.577-4.895 1.59-7.773"></svg:path><svg:circle cx="11.606" cy="37.903" r="1.597" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.157" cy="14.227" r="1.597" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.597" cy="21.385" r="5.855" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInterstellarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntervalTimerIcon],svg[arcticons-interval-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.238 35.828v3.526M11.96 24.037H8.435M23.44 42.624a18.44 18.44 0 0 1 0-36.88m-.202 2.939v3.526"></svg:path><svg:circle cx="16.332" cy="11.786" r=".75" fill="currentColor"></svg:circle><svg:circle cx="10.785" cy="30.612" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.075" cy="35.865" r=".75" fill="currentColor"></svg:circle><svg:circle cx="10.602" cy="17.608" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.259" cy="14.768" r="2.017" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.389 5.266l6.501 6.465l-1.175 5.584M28.31 19.05l3.67 10.827l-4.591 3.196l-.625 9.66"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43 42.734L36.735 28.13l-4.02-10.816l-4.405 1.736l-5.036 5.94l5.29 1.8m8.171 1.341l-4.755 1.746"></svg:path>`,
})
export class ArcticonsIntervalTimerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntesaIcon],svg[arcticons-intesa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-29 11.11h29"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.867 31.39v-7.908a4.133 4.133 0 0 1 8.266 0v7.909M9.5 31.39v-7.908a4.133 4.133 0 0 1 8.267 0v7.909m12.466-.001v-7.908a4.133 4.133 0 0 1 8.267 0v7.909"></svg:path>`,
})
export class ArcticonsIntesaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntraIcon],svg[arcticons-intra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="19.218" r="10.561" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 39.343l19.5-19.5l19.5 19.5z"></svg:path>`,
})
export class ArcticonsIntraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInttiIcon],svg[arcticons-intti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.295 8.362H7.705L4.5 11.568v7.915l3.205 3.205h32.59l3.205-3.205v-7.915zm-4.674 2.78v8.766m-23.242-8.766v8.766m10.061-8.766h5.808m-2.904 8.766v-8.766m5.147 0h2.904m-2.904 8.766v-8.766"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.612 19.908v-8.766l5.807 8.766v-8.766"></svg:path><svg:rect width="37.186" height="7.865" x="5.407" y="31.773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.096"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.605 28.946h18.79"></svg:path>`,
})
export class ArcticonsInttiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInureIcon],svg[arcticons-inure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.462c-6.73 0-17.448-12.79-17.448-25.91c0-9 7.523-11.062 17.448-11.062s17.448 2.062 17.448 11.062c0 13.121-10.718 25.91-17.448 25.91m-5.266-20.309L28.328 5.65M16.824 38.965l15.16-26.077"></svg:path>`,
})
export class ArcticonsInureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInureUnlockerIcon],svg[arcticons-inure-unlocker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.5 32.126l8.277-14.238m-7.933 25.206l10.978-18.885M24 43.5c10.819 0 14.91-7.14 14.91-14.901V24.86c0-5.606-2.426-6.973-8.823-6.973H17.913c-6.397 0-8.822 1.367-8.822 6.973v3.737C9.09 36.362 13.18 43.5 24 43.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.95 17.942V12.55a8.05 8.05 0 0 1 15.585-2.84m.515 8.232v-3.123"></svg:path>`,
})
export class ArcticonsInureUnlockerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInventoryIcon],svg[arcticons-inventory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.53 26.22L18.2 13.551L34.449 29.8L21.78 42.47"></svg:path><svg:circle cx="27.873" cy="29.84" r="1.973" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.269 24.482L5.5 22.713m1.769 1.769L5.5 22.713m3.607-.07l-1.768-1.768m3.607-.07l-1.769-1.769m3.607-.07l-1.768-1.768m3.607-.07l-1.769-1.769m3.607-.07l-1.768-1.768m7.219 3.654l1.769-1.769m-1.769 1.769l1.769-1.769m-3.686-.148l1.769-1.769m1.987 5.524l1.769-1.768m.07 3.607l1.768-1.768m.07 3.607l1.769-1.769m.07 3.607l1.768-1.768m.07 3.607l1.769-1.769m.149 3.686l1.768-1.768M25.287 42.5l-1.769-1.769m1.769 1.769l-1.769-1.769m3.607-.07l-1.768-1.768m3.607-.07l-1.769-1.769m3.607-.07l-1.768-1.768m3.607-.07l-1.769-1.769m3.607-.07l-1.768-1.768M21.208 11.861l-2.841-2.842l-2.842 2.842m21.339 20.147l1.801-3.482M11.352 10.695L14.358 10"></svg:path>`,
})
export class ArcticonsInventoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInventoryOgIcon],svg[arcticons-inventory-og-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.466 27.058c0 3.984-3.04 6.273-6.79 5.113s-6.79-5.33-6.79-9.313h0c0-3.984 3.04-6.274 6.79-5.114h0c3.75 1.16 6.79 5.33 6.79 9.314"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.086 26.223c0 1.61-.833 2.906-2.185 3.398c-1.352.491-3.017.105-4.368-1.014c-1.352-1.12-2.185-2.801-2.185-4.412m2.449-15.763l.235 4.916m17.216 2.693l-.469 23.527M4.5 11.593l12.297-3.161L43.5 11.359"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 11.593l2.108 19.781l27.171 8.194l9.135-7.96l.586-20.249l-9.252 4.682z"></svg:path><svg:path fill="currentColor" d="M21.057 22.81c0 .397-.303.626-.678.51c-.374-.116-.677-.532-.677-.93s.303-.626.677-.51s.678.532.678.93m-4.484-1.094c0 .398-.304.626-.678.51s-.678-.532-.678-.93c0-.397.304-.625.678-.51c.374.116.678.532.678.93"></svg:path>`,
})
export class ArcticonsInventoryOgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInvestIcon],svg[arcticons-invest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.504 41.251H42.5V28.153M7.434 37.688L22.424 22.7l5.108 5.108L42.5 12.84v11.056M31.359 12.839H42.5"></svg:path><svg:rect width="13.13" height="11.358" x="5.5" y="12.402" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.181"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.562 16.188h10.067M5.5 19.974h10.067"></svg:path><svg:circle cx="12.056" cy="8.589" r="1.84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInvestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInvestingIcon],svg[arcticons-investing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 34.947l7.139-5.92l4.774 4.01l9.101-8.592l5.728 4.519L42.5 20.053"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path>`,
})
export class ArcticonsInvestingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInvestownIcon],svg[arcticons-investown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.165 24.894v-7.828c.457-7.544 11.55-7.913 12.335 0v7.843c-.376 6.823-11.235 7.465-12.335-.015"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.834 24.94v-7.83c.457-7.543 11.55-7.912 12.335 0v14.263c-.376 6.822-11.235 7.465-12.335-.015z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 31.2v-7.83c.457-7.543 11.55-7.912 12.335 0v7.844C17.459 38.037 6.6 38.679 5.5 31.199"></svg:path>`,
})
export class ArcticonsInvestownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInvisibleWidgetIcon],svg[arcticons-invisible-widget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.577 12.442A4.5 4.5 0 0 1 31.3 12.1m-4.5 4.5c0-.61.122-1.192.342-1.723m0 3.446A4.5 4.5 0 0 1 26.8 16.6m4.5 4.5c-.61 0-1.192-.121-1.723-.342m3.446 0c-.53.22-1.113.342-1.723.342m4.5-4.5c0 .61-.121 1.192-.342 1.723m0-3.446c.22.53.342 1.113.342 1.723m-4.5-4.5c.61 0 1.192.122 1.723.342M18.9 21.1c.3-.3 1.1-.1 1.1-.1m-1.883 1.233L18.9 21.1m-3.917 5.667L16.55 24.5m-4.7 6.8l1.567-2.267M9.5 34.7l.783-1.133M10.1 35.8c-.6 0-.6-1.1-.6-1.1m1.99 1.1H10.1m6.95 0h-2.78m8.34 0h-2.78m8.34 0h-2.78m8.34 0h-2.78m6.95 0h-1.39m1.89-1.2c.4.4-.5 1.2-.5 1.2m-.475-2.175l.975.975m-4.875-4.875l1.95 1.95M30.6 26.8l.975.975M29.6 26.8c.3-.3 1 0 1 0m-2.4 1.4l1.4-1.4m-2.4 1.4c.3.3 1 0 1 0m-1.9-.9l.9.9m-4.5-4.5l1.8 1.8M20 21l.9.9M40.032 5.804A4 4 0 0 0 38.5 5.5m4 4c0-.543-.108-1.06-.304-1.532m.304 2.982V9.5m0 7.25v-2.9m0 8.7v-2.9m0 8.7v-2.9m0 8.7v-2.9m0 7.25v-1.45m-.304 2.982c.196-.472.304-.99.304-1.532m-4 4c.543 0 1.06-.108 1.532-.304m-2.982.304h1.45m-7.25 0h2.9m-8.7 0h2.9m-8.7 0h2.9m-8.7 0h2.9m-7.25 0h1.45m-2.982-.304c.472.196.99.304 1.532.304m-4-4c0 .543.108 1.06.304 1.532M5.5 37.05v1.45m0-7.25v2.9m0-8.7v2.9m0-8.7v2.9m0-8.7v2.9m0-7.25v1.45m.304-2.982c-.196.472-.304.99-.304 1.532m4-4c-.543 0-1.06.108-1.532.304M10.95 5.5H9.5m7.25 0h-2.9m8.7 0h-2.9m8.7 0h-2.9m8.7 0h-2.9m7.25 0h-1.45"></svg:path>`,
})
export class ArcticonsInvisibleWidgetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInvizibleproIcon],svg[arcticons-inviziblepro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" rx="19.5" ry="12.01"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M40 40L8 8"></svg:path><svg:circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"></svg:circle><svg:circle cx="24" cy="24" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"></svg:circle>`,
})
export class ArcticonsInvizibleproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInvoiceNinjaIcon],svg[arcticons-invoice-ninja-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.996 24.053a2.603 2.603 0 0 1-2.452-2.608c0-1.442 1.16-2.612 2.592-2.612s2.593 1.17 2.593 2.612c0 .289-.048.575-.14.849m-19.177-.001a2.6 2.6 0 0 1-.14-.848a2.6 2.6 0 0 1 2.592-2.612h0a2.6 2.6 0 0 1 2.592 2.612a2.603 2.603 0 0 1-2.454 2.608"></svg:path><svg:rect width="39" height="19.544" x="4.5" y="14.228" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.527s16.821 4.408 19.5 4.408c2.475 0 19.5-4.408 19.5-4.408m-15.698 10.69L43.5 15.528m-39-.001l15.67 10.67M4.5 32.492s16.821-7.319 19.5-7.319c2.475 0 19.5 7.319 19.5 7.319"></svg:path>`,
})
export class ArcticonsInvoiceNinjaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsInwareIcon],svg[arcticons-inware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 29h-6m6-10h-6m-25 10h-6m6-10h-6"></svg:path><svg:rect width="25" height="25" x="11.5" y="11.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5" ry="5"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19 42.5v-6m10 6v-6m-10-25v-6m10 6v-6"></svg:path>`,
})
export class ArcticonsInwareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIoIcon],svg[arcticons-io-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="30.597" cy="26.455" r="12.903" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="6.561" height="20.047" x="4.5" y="19.311" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.28"></svg:rect><svg:circle cx="7.78" cy="11.922" r="3.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsIoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIobMobileIcon],svg[arcticons-iob-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m24.69 26.8l8.812 9.077l9.014-9.037l-9.013 9.041"></svg:path><svg:path d="m24.73 30.138l8.831 9.084l8.898-9.028l-8.906 9.036"></svg:path><svg:path d="m24.674 33.328l8.912 9.172l8.896-9.155l-8.892 9.151m-7.603-17.239l7.523-7.563l7.607 7.541l-7.603-7.54"></svg:path><svg:path d="m27.528 26.781l5.999-5.925l6.015 5.958l-6.02-5.962"></svg:path><svg:path d="m29.061 28.415l4.453-4.501l4.458 4.491l-4.458-4.491M6.96 25.198l7.524-7.563l7.607 7.541l-7.604-7.54"></svg:path><svg:path d="m8.502 26.722l5.998-5.925l6.015 5.958l-6.019-5.962"></svg:path><svg:path d="m10.035 28.356l4.452-4.501l4.459 4.491l-4.459-4.491m.539-9.629L23.753 5.5m-7.679 10.598l7.919-7.96l8.006 7.937l-8.002-7.937"></svg:path><svg:path d="m17.696 17.702l6.314-6.236l6.331 6.27l-6.335-6.274"></svg:path><svg:path d="m19.31 19.422l4.686-4.738l4.693 4.728l-4.693-4.728M5.69 26.752l8.812 9.077l8.945-8.944l-8.945 8.948"></svg:path><svg:path d="m5.615 29.974l8.946 9.2l8.898-9.028l-8.906 9.036"></svg:path><svg:path d="m5.674 33.28l8.912 9.172l8.872-9.074l-8.868 9.07"></svg:path></svg:g>`,
})
export class ArcticonsIobMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIobrokerVisuIcon],svg[arcticons-iobroker-visu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 16.713v10.705M13.5 10.27h21v23.59h-21zm8.02 27.46h4.96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.028 14.228c3.8 1.035 6.256 4.775 5.742 8.742c-.513 3.968-3.837 6.933-7.77 6.933s-7.257-2.966-7.77-6.933c-.514-3.967 1.942-7.707 5.741-8.742"></svg:path><svg:rect width="29" height="39" x="9.414" y="4.124" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5" ry="5"></svg:rect><svg:circle cx="24" cy="14.228" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsIobrokerVisuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIofIcon],svg[arcticons-iof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.7 4.5h-2.3c-1.1 0-2 .9-2 2v35c0 1.1.9 2 2 2h2.3m0-39v39h24.9c1.1 0 2-.9 2-2v-35c0-1.1-.9-2-2-2z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.179 4.5v13.337l-3-4.385l-3 4.385V4.5"></svg:path>`,
})
export class ArcticonsIofIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIonLauncherIcon],svg[arcticons-ion-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.42 24.081a15.4 15.4 0 0 1-2.066 7.71m-5.644 5.643A15.42 15.42 0 0 1 8.58 24.08"></svg:path><svg:circle cx="24" cy="23.98" r="7.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.923" cy="34.964" r=".75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.416 19.301L24 8.501l18.584 10.8"></svg:path>`,
})
export class ArcticonsIonLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIonLauncherAlt1Icon],svg[arcticons-ion-launcher-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="27.753" r="11.747" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.91 19.595L24 8.5l19.09 11.095"></svg:path>`,
})
export class ArcticonsIonLauncherAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIosLauncherIcon],svg[arcticons-ios-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:circle cx="11.685" cy="18.031" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.685 22.18v8.975m17.108-1.485c.83 1.082 1.873 1.485 3.322 1.485h2.005a3.38 3.38 0 0 0 3.38-3.38v-.014a3.38 3.38 0 0 0-3.38-3.38h-2.212a3.383 3.383 0 0 1-3.383-3.383h0a3.39 3.39 0 0 1 3.39-3.39h1.995c1.45 0 2.49.402 3.322 1.484"></svg:path><svg:rect width="8.975" height="13.547" x="15.909" y="17.607" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.487" ry="4.487"></svg:rect>`,
})
export class ArcticonsIosLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIotFleetMgmtIcon],svg[arcticons-iot-fleet-mgmt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 27.148c-.823 0-1.49.666-1.49 1.487a1.49 1.49 0 0 0 1.197 1.456l-1.046 2.688h2.676l-1.046-2.688a1.49 1.49 0 0 0 1.197-1.456c0-.821-.666-1.487-1.489-1.487m8.533-3.872c2.522 11.493-5.048 16.81-13.548 20.224c-3.122-3.074-6.604-6.485-9.314-10.612c-2.043-3.111-3.32-6.798-3.32-10.699C6.351 12.261 14.994 4.5 24 4.5s17.65 7.76 17.65 17.69c0 3.9-1.279 7.587-3.32 10.698c-2.712 4.127-6.194 7.538-9.316 10.612c-8.5-3.414-16.07-8.73-13.548-20.224L24 20.341z"></svg:path>`,
})
export class ArcticonsIotFleetMgmtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIpToolsIcon],svg[arcticons-ip-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.566 12.5v23m7.631 0v-23h7.475c4.312 0 7.762 3.45 7.762 7.762s-3.45 7.763-7.762 7.763h-7.475"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsIpToolsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIpWebcamIcon],svg[arcticons-ip-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="19.094" cy="16.183" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.518" ry="1.88" transform="rotate(-24.414 19.094 16.183)"></svg:ellipse><svg:circle cx="30.792" cy="18" r="1.923" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.075" cy="22.146" r="1.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsIpWebcamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIpfsliteIcon],svg[arcticons-ipfslite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4m-28.345-24v11m12.762-11h5.5m-5.5 5.5h3.575m-3.575-5.5v11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.916 29.5v-11h3.601c2.036 0 3.686 1.654 3.686 3.694s-1.65 3.695-3.686 3.695h-3.601m17.86 2.406c.674.878 1.52 1.205 2.697 1.205h1.629a2.747 2.747 0 0 0 2.744-2.75h0A2.747 2.747 0 0 0 35.102 24h-1.8a2.747 2.747 0 0 1-2.744-2.75h0a2.747 2.747 0 0 1 2.744-2.75h1.629c1.176 0 2.022.327 2.697 1.205"></svg:path>`,
})
export class ArcticonsIpfsliteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIplusIcon],svg[arcticons-iplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.222 4.685s4.743 6.474.997 7.13a21.15 21.15 0 0 0-10.096 2.266"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.867 3.292a65 65 0 0 0 3.318 9.739c.649 2.166.033 5.05-3.677 4.25a32.9 32.9 0 0 0-14.272 2.266M29.244 3.292s2.519 4.121 4.645 4.645c1.26.309 3.716-1.162 3.716-1.162"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.178 2.677c2.646 2.398 4.424 7.889 7.693 9.904s7.084-.299 10.217-1.858h0m4.412 9.985s-2.39 2.39-2.554 3.947c-.183 1.73 1.857 4.877 1.857 4.877"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.642 15.134a52 52 0 0 1-4.602 6.34c-.833.915-2.426 2.017-1.15 4.043c1.25 1.405 4.823 9.496 4.823 9.496m-3.25 3.576s-3.027-5.9-5.766-7.553c-2.67-1.3-3.771-.806-5.502 1.816S18.25 44.776 18.25 44.776"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.671 45.323s5.474-6.798 7.895-7.43c1.917.055 3.948 4.18 3.948 4.18m-21.567 1.57s2.652-8.1 6.063-13.346c1.143-2.296-.892-4.306-3.896-5.395c-4.602-1.404-13.614-.589-13.614-.589"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.772 28.952s8.14-.4 9.521 1.973c1.32 2.27-1.859 9.87-1.859 9.87"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.63 33.712s1.999.143 2.583.833c.294 1.14-.957 2.186-.957 2.186"></svg:path>`,
})
export class ArcticonsIplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIpmiviewIcon],svg[arcticons-ipmiview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 33.317l2.727-3.988l2.878 9.293l2.641-26.484l4.815 22.882l3.03-3.259l2.367 5.502l2.914-9.276l2.541 4.504l2.683-23.113l1.16 14.374l2.818-5.17l2.488 2.704l2.614 7.769H43.5"></svg:path>`,
})
export class ArcticonsIpmiviewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIppbMobileIcon],svg[arcticons-ippb-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 31.497s4.981-4.515 11.04-.494c0 0 5.075 3.027 9.497-.818c2.901-2.523 6.181-6.185 9.674-10.325c1.793-2.125 5.201-6.515 8.789-6.811"></svg:path><svg:path d="M8.33 26.794c1.864-.458 4.155-.644 6.702 1.046c0 0 5.03 3.173 9.606-.488c0 0 1.482-.636 9.674-10.443c0 0 2.328-2.916 4.944-4.935"></svg:path><svg:path d="M12.07 23.877c.95.08 1.935.538 2.836 1.136c0 0 4.755 3.282 9.332-.378c0 0 1.832-1.278 9.529-10.37c0 0 .394-.495 1.04-1.216"></svg:path><svg:circle cx="24.075" cy="26.738" r="9.288"></svg:circle></svg:g>`,
})
export class ArcticonsIppbMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIprayIcon],svg[arcticons-ipray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.234 39.645L24 42.5v-37l18.234 5.481zM24 11.781l18.233 5.139M24 16.806l18.233 4.225M5.766 39.645L24 42.5v-37L5.766 10.981zM24 11.781L5.766 16.92M24 16.806L5.766 21.031"></svg:path>`,
})
export class ArcticonsIprayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIprintAndScanIcon],svg[arcticons-iprint-and-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.86 24.24v15h24.28v-15ZM7.5 8.76h33a3 3 0 0 1 3 3v2.058h0h-39h0V11.76a3 3 0 0 1 3-3m-3 5.058V27.6a3 3 0 0 0 3 3h4.36m24.28 0h4.36a3 3 0 0 0 3-3V13.818"></svg:path><svg:circle cx="18.154" cy="31.74" r="3.455" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.051 31.74h7.697m-7.697 2.362h4.963m-4.963-4.724h7.697"></svg:path>`,
})
export class ArcticonsIprintAndScanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIprintAndScanAltIcon],svg[arcticons-iprint-and-scan-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.997 15.118L8.86 8.425l29.875-.154l4.564 7.045Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.997 15.118V17.2l38.303.002v-1.887m-2.002 1.887L43.5 26.53l-17.12.1m-3.444 0H4.5l2.084-9.427M4.5 26.63l2.183 9.427l6.68.031m21.106.25l6.45-.082L43.5 26.53m-31.607-9.327l12.553 10.716l11.908-7.938L33 17.202m-19.767 11.91l.198 10.618l21.038-.299V29.11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.274 31.294H10.75l-.198-2.183h26.992l-.198 2.183h-2.878m-19.153 5.904L26.63 37m-11.314-2.44H26.63m-11.314-2.82l11.314-.099"></svg:path>`,
})
export class ArcticonsIprintAndScanAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIptvProIcon],svg[arcticons-iptv-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-29 13.123v10.754"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.657 29.377V18.623h3.521c1.99 0 3.604 1.617 3.604 3.611s-1.613 3.612-3.604 3.612h-3.52m8.785-7.223h7.125m-3.562 10.754V18.623m13.494 0l-3.562 10.754l-3.563-10.754"></svg:path>`,
})
export class ArcticonsIptvProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIptvSmartersIcon],svg[arcticons-iptv-smarters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.105 42.5c2.499-.401 6.885-.041 8.66-5.295m-.193-18.746c-.873-2.128-2.52-2.998-5.612-3.176c-5.582-.321-18.31 1.47-22.956 2.83c-3.271.958-3.274 4.903-3.274 4.903m4.13.227l.597 11.568m3.223-.173l-.598-11.568l3.718-.2a3.91 3.91 0 0 1 .403 7.809l-3.718.2m10.4-8.389l7.579-.407m-3.121 11.768l-.598-11.568m14.525-.778l-3.121 11.768l-4.459-11.361M20.34 16.04l-4.682-8.064m6.452 7.796l1.819-7.41"></svg:path><svg:circle cx="15.015" cy="6.822" r="1.322" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24.343" cy="7.106" r="1.322" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsIptvSmartersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIpvanishIcon],svg[arcticons-ipvanish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.22 27.81h.28V43.5h0h-6.28h0v-9.69a6 6 0 0 1 6-6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.49 14.9v6.27h6.09a3.32 3.32 0 0 1 3.32 3.32h0a3.31 3.31 0 0 1-3.32 3.32h-6.09v6.28h6.09a9.6 9.6 0 0 0 9.6-9.6h0a9.59 9.59 0 0 0-9.6-9.59Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.22 14.9h6.28v6.28h-6.28zm-6.26-6.27h3.53v3.53h-3.53zM7.82 4.5h2.19v2.19H7.82zm4.81 0h2.19v2.19h-2.19zM7.82 9.31h2.19v2.19H7.82zm4.14 5.59h3.53v3.53h-3.53zm6.26-6.27h3.53v3.53h-3.53z"></svg:path>`,
})
export class ArcticonsIpvanishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIqiyiIcon],svg[arcticons-iqiyi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="currentColor" d="M11.836 19.016c0 .414-.333.75-.744.75a.747.747 0 0 1-.744-.75c0-.414.333-.75.744-.75c.41 0 .744.336.744.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.092 22.216v7.199m10.197 0l-3.438-3.6m-.001 3.6c-1.983 0-3.437-1.6-3.437-3.466v-3.6c0-2 1.586-3.6 3.438-3.6h0c1.983 0 3.438 1.6 3.438 3.6v3.466c0 2-1.455 3.6-3.438 3.6m6.494-10.665v10.665m9.933-10.665l-3.438 5.332l-3.438-5.332m3.438 10.665v-5.333m6.494-5.332v10.665"></svg:path>`,
})
export class ArcticonsIqiyiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIqooIcon],svg[arcticons-iqoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.275 23.221v5.166"></svg:path><svg:circle cx="5.275" cy="20.388" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.103 24.254a4.133 4.133 0 1 1-8.266 0a4.133 4.133 0 0 1 8.266 0m12.397 0a4.133 4.133 0 1 1-8.265 0a4.133 4.133 0 0 1 8.265 0m-28.337.59l3.542 3.439m-4.133.103a4.133 4.133 0 1 1 4.133-4.132"></svg:path>`,
})
export class ArcticonsIqooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrRemoteIcon],svg[arcticons-ir-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.63 43.5V22.844a1.47 1.47 0 0 1 1.475-1.474h15.653a1.47 1.47 0 0 1 1.474 1.474V43.5z"></svg:path><svg:circle cx="17.989" cy="24.539" r="1.474" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.994 14.86c-1.73-2.72-8.568-5.043-12.005 0m16.379-5.581c-3.915-4.619-13.824-7.915-20.736 0"></svg:path>`,
})
export class ArcticonsIrRemoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrcIcon],svg[arcticons-irc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-19.727 30v-23m10.454 23v-23M12.5 18.773h23m-23 10.454h23"></svg:path>`,
})
export class ArcticonsIrcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrccloudIcon],svg[arcticons-irccloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.209 19.488c-.561 0-1.102.076-1.626.196c.068-.501.116-1.009.116-1.53c0-6.213-5.038-11.25-11.251-11.25s-11.251 5.037-11.251 11.25c0 .27.021.533.04.797c-3.296.873-5.737 3.847-5.737 7.417a7.7 7.7 0 0 0 7.702 7.702h2.055c.402 2.9-.428 5.162-2.88 5.735c3.657 3.325 9.87-.195 9.528-5.735h13.304a7.291 7.291 0 0 0 0-14.582"></svg:path>`,
})
export class ArcticonsIrccloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrctcRailConnectIcon],svg[arcticons-irctc-rail-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.747 19.452C14.54 14.55 27.37 12.59 36.548 13.66"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.974 13.432c-3.03 0-12.995 3.281-18.564 9.43"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.028 13.403c0-6.47-4.455-8.921-8.153-8.921s-9.177 3.787-9.177 7.618c2.717-3.13 4.677-4.099 6.95-4.099a5.97 5.97 0 0 1 5.819 5.456m-.803 27.175c-7.14-2.566-15.254-12.698-18.917-21.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.337 26.125c1.515 2.623 9.34 9.613 17.448 11.362"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.285 22.628c-5.604 3.236-5.498 8.319-3.65 11.521s7.869 6.055 11.187 4.14c-4.07-.789-5.889-2.002-7.025-3.97a5.97 5.97 0 0 1 1.816-7.768M36.548 13.66c1.348 7.466-3.37 19.559-8.884 26.972"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.648 34.186c1.509-2.614 3.614-12.905 1.115-20.791"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.646 37.712c5.604 3.235 9.953.602 11.802-2.6s1.31-9.842-2.009-11.758c1.353 3.92 1.211 6.1.075 8.069a5.97 5.97 0 0 1-7.635 2.311m-12.84-14.995h11.495v11.495H19.039z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.895 18.739a3.486 3.486 0 0 1 3.486 3.486h0a3.486 3.486 0 0 1-3.486 3.486l4.277 4.522"></svg:path>`,
})
export class ArcticonsIrctcRailConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIreaderIcon],svg[arcticons-ireader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.125 14.225a9.42 9.42 0 0 0-6.774 2.864l-.005.003c-3.73 3.744-3.804 9.963-.162 13.797l.013.013l.008.009a9.44 9.44 0 0 0 13.554 0L24 27.58l3.555-3.65l3.1-3.186c.9-.925 2.062-1.388 3.223-1.388s2.32.463 3.221 1.388l.019.018l.013.014l.008.008a4.637 4.637 0 0 1 .083 6.482c-1.802 1.835-4.63 1.837-6.426-.009l-1.462-1.502l-3.555 3.652l1.462 1.503a9.44 9.44 0 0 0 13.554 0l.008-.009l.013-.013c3.642-3.834 3.568-10.053-.161-13.797l-.005-.003a9.44 9.44 0 0 0-13.55.003l-6.655 6.838l-3.24 3.328c-1.797 1.846-4.625 1.844-6.427.009a4.637 4.637 0 0 1 .084-6.482l.008-.008l.013-.014l.018-.018c.9-.925 2.06-1.388 3.221-1.388s2.322.463 3.223 1.388l1.322 1.358l3.555-3.65l-1.322-1.36a9.43 9.43 0 0 0-6.775-2.868z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.06 12.453l3.85-3.849l3.848 3.849l-3.849 3.849zm0 23.094l3.85-3.849l3.848 3.849l-3.849 3.849z"></svg:path>`,
})
export class ArcticonsIreaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIreader2Icon],svg[arcticons-ireader-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.552 37.835c.448-.99 1.76-1.838 3.333-1.838H42.5V10.78c0-.933-.751-1.685-1.684-1.685H28.467A4.45 4.45 0 0 0 24 13.59a4.45 4.45 0 0 0-4.467-4.495H7.184A1.68 1.68 0 0 0 5.5 10.78v25.217h13.615c1.574 0 2.885.848 3.333 1.838c.426.943.876 1.07 1.552 1.07s1.126-.127 1.552-1.07m4.294-22.727h6.738m-6.738 4.463h6.738"></svg:path>`,
})
export class ArcticonsIreader2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrealProIcon],svg[arcticons-ireal-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.066 20.999c12.682 3.01 5.453 14.411-14.055 11.591L37.74 7.464c9.132 7.589 10.384 21.144 2.796 30.276S19.393 48.124 10.26 40.536S-.124 19.393 7.464 10.261a21.5 21.5 0 0 1 24.98-6.033"></svg:path>`,
})
export class ArcticonsIrealProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrisGoIcon],svg[arcticons-iris-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.575 24.981c0-1.648 1.319-2.983 2.945-2.983m-2.945 0v7.905"></svg:path><svg:circle cx="15.229" cy="18.343" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.884 21.998v7.905"></svg:path><svg:circle cx="27.556" cy="18.343" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.21 21.998v7.905m4.876-.666c.538.457 1.118.667 2.422.667h.661c1.076 0 1.947-.885 1.947-1.976s-.871-1.977-1.947-1.977h-1.321c-1.076 0-1.947-.885-1.947-1.976s.871-1.977 1.947-1.977h.66c1.304 0 1.885.21 2.423.667"></svg:path>`,
})
export class ArcticonsIrisGoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIriunwebcamIcon],svg[arcticons-iriunwebcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.464 33.868a8.687 8.687 0 1 1 8.687-8.687a8.696 8.696 0 0 1-8.687 8.687"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.396 36.486A11.417 11.417 0 1 0 13.979 25.07a11.43 11.43 0 0 0 11.417 11.417M24 4.5a17.219 17.219 0 1 0 17.219 17.219A17.22 17.22 0 0 0 24 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.81 37.537a38.8 38.8 0 0 1 6.883 5.346a3.3 3.3 0 0 1-.558.45a50 50 0 0 0-12.464-1.4a53.8 53.8 0 0 0-13.39 1.567a15 15 0 0 1-.98-.637c1.045-1.055 5.852-4.848 7.102-5.236"></svg:path>`,
})
export class ArcticonsIriunwebcamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrmaIcon],svg[arcticons-irma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.929 18.915v8.654m10.535-.01v-8.644l4.328 8.654l4.327-8.641v8.641m-16.789 0v-8.654h2.833a2.907 2.907 0 0 1 0 5.813H18.33m2.833 0l2.833 2.839m13.294-.024l3.149-8.628m1.535 5.759h-3.543"></svg:path><svg:rect width="34.374" height="23.148" x="6.813" y="12.426" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" transform="rotate(-20 24 24)"></svg:rect>`,
})
export class ArcticonsIrmaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrobotIcon],svg[arcticons-irobot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.056 5.5c2.69 0 4.877 2.154 4.877 4.813s-2.187 4.812-4.877 4.812s-4.877-2.154-4.877-4.812S10.365 5.5 13.056 5.5m6.345 15.633c14.375 1.394 17.197-8.665 1.338-6.803l1.807-8.765s5.49-.023 7.327-.023c15.34 0 18.144 13.974 5.052 22.483l7.65 14.475h-11.61zm0 0L14.784 42.5H4.736C5.54 25.627 12.6 21.378 19.401 21.133"></svg:path>`,
})
export class ArcticonsIrobotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIronfoxIcon],svg[arcticons-ironfox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.582 5.612L5.5 14.806c.118 13.791 8.084 20.855 18.276 27.582c11.773-7.4 18.612-13.23 18.724-27.582l-9.53-9.194v9.194H14.582z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.582 24.336c.957 1.828 3.33 6.773 5.673 3.364zm18.612 0c-.958 1.828-3.33 6.773-5.673 3.364z"></svg:path>`,
})
export class ArcticonsIronfoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIronwillIcon],svg[arcticons-ironwill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.79 24.79l-3.48.64l-2.76 4.55l-.56-6.93l-7.15-3.4l-1.19.31l.94-4.81l1.45 2.82l5.44 2.13l4.33-2.51l-7.08-6.32l-4.7-.44l-5.83 6.35l1.26 7.68l3.63 4.51l-.31 4.77l-3.32 5.76l6.73 3.6l8.99-.78l3.01-7.96l5.45-6.45l-.06-5.86"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.92 13.23l.19-8.42l-5.07-.31l-2.01 6.33m10.49 5.61l3.29-7.99l-4.7-2.26l-2.12 4.01"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.21 9.92l4.93 4.04l-1.7 3.51l-4.19 4.32l-3.8-2.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.71 21.31l2.61 4.37l6.48-4.91l-4.64-4.78"></svg:path>`,
})
export class ArcticonsIronwillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrplusIcon],svg[arcticons-irplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.8 8.5H16m-3.2 4.8H16m-3.2 4.8H16m3.2-9.6h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2m3.2-9.6h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2M32 8.5h3.2M32 13.3h3.2M32 18.1h3.2M12.8 25H16m-3.2 4.9H16m-3.2 4.8H16m-3.2 4.8H16M19.2 25h3.2m-3.2 4.9h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2M25.6 25h3.2m-3.2 4.9h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2M32 25h3.2M32 29.9h3.2M32 34.7h3.2M32 39.5h3.2"></svg:path><svg:rect width="31" height="39" x="8.5" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsIrplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrregularexpressionsIcon],svg[arcticons-irregularexpressions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.177 19.345h6.518a1.986 1.986 0 0 1 1.986 1.985v5.934a1.986 1.986 0 0 1-1.986 1.986H7.177a1.986 1.986 0 0 1-1.986-1.986V21.33a1.986 1.986 0 0 1 1.986-1.985m13.563 0h6.518a1.986 1.986 0 0 1 1.987 1.985h0v5.934a1.986 1.986 0 0 1-1.986 1.986H20.74a1.986 1.986 0 0 1-1.986-1.986h0V21.33a1.986 1.986 0 0 1 1.986-1.985m13.565 0h6.518a1.986 1.986 0 0 1 1.986 1.985h0v5.934a1.986 1.986 0 0 1-1.986 1.986h-6.518a1.986 1.986 0 0 1-1.986-1.986h0V21.33a1.986 1.986 0 0 1 1.986-1.985m-6.302 13.249h6.518a1.986 1.986 0 0 1 1.986 1.986v5.934a1.986 1.986 0 0 1-1.986 1.986h-6.518a1.986 1.986 0 0 1-1.986-1.986h0V34.58a1.986 1.986 0 0 1 1.986-1.986m0-26.498h6.518a1.986 1.986 0 0 1 1.986 1.986v5.934a1.986 1.986 0 0 1-1.986 1.986h-6.518a1.986 1.986 0 0 1-1.986-1.986h0V8.082a1.986 1.986 0 0 1 1.986-1.986m-5.265 20.726h2.524m-2.524-5.05h2.524m-2.524 2.525h1.641m-1.641-2.525v5.05"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.203 23.48a1.71 1.71 0 0 0-1.767-1.705a1.78 1.78 0 0 0-1.578 1.768v1.578a1.704 1.704 0 0 0 3.408 0h-1.704m-7.973 9.901l3.345 5.05m0-5.05l-3.345 5.05m0-26.499v-5.05h1.641a1.704 1.704 0 1 1 0 3.41h-1.641m1.704-.063l1.641 1.704"></svg:path><svg:circle cx="34.439" cy="8.3" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.764 26.822v-5.05h1.64a1.704 1.704 0 1 1 0 3.41h-1.64m1.704-.063l1.641 1.704m4.326 13.249h2.525m-2.525-5.05h2.525m-2.525 2.525h1.642m-1.642-2.525v5.05m.609-31.312l1.307 4.877m-5.084-6.382l6.297-1.687a1.986 1.986 0 0 1 2.432 1.404l1.536 5.732a1.986 1.986 0 0 1-1.404 2.432h0l-6.297 1.688a1.986 1.986 0 0 1-2.432-1.405l-1.536-5.732a1.986 1.986 0 0 1 1.404-2.432m1.171 25.339h6.519a1.986 1.986 0 0 1 1.986 1.986h0v5.934a1.986 1.986 0 0 1-1.986 1.986h-6.519a1.986 1.986 0 0 1-1.986-1.986V34.58a1.986 1.986 0 0 1 1.986-1.986"></svg:path><svg:circle cx="19.956" cy="7.713" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsIrregularexpressionsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrremoteIcon],svg[arcticons-irremote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.797 8.887a21.5 21.5 0 1 0 30.406 0M24 24.09V2.594"></svg:path>`,
})
export class ArcticonsIrremoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIscepIcon],svg[arcticons-iscep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.537 23.967v-11.71c.03-.277-.1-1.22.906-1.49l.547-.144v-.53h-6.633v.53l.521.138c1.033.262.9 1.217.93 1.497v.713c-.154.011-.318.022-.463.05c-3.338.471-5.77 3.107-5.77 6.294c0 2.372 1.127 3.857 2.924 5.206c.933.701 1.567 1.004 2.693 1.62l.617.344v5.58c-.029.28.1 1.223-.905 1.491l-.548.148v.528h6.634v-.528l-.523-.139c-1.032-.263-.9-1.218-.928-1.5l-.002-3.5l.725.407s2.184 1.063 3.025 2.987c.845 1.925.388 3.697-2.977 4.907c0 0-4.097 1.514-7.727-1.886c0 0-1.252-1.027-1.87-2.79c-.097-.275-.208-.286-.208-.286h-.525v6.698h.445s.268-.39.499-.578c.061-.051.106-.087.163-.121c.293-.179.714-.41 1.752-.173l.077.024c.237.056 1.423.465 1.423.465c.874.368 1.601.63 2.412.777a2.12 2.12 0 0 0-1.179 1.9c0 .896.557 1.594 1.34 1.872c.311.151.35.263.438.54c.076.237-.171 1.192-.171 1.192h.549s.356-.44.854-1.129c.218-.3.553-.906.752-1.175c.267-.391.483-.765.483-1.3c0-.732-.374-1.378-.936-1.76c.548-.017 1.604-.186 2.522-.552c3.895-1.322 4.783-4.76 4.783-4.76a7.2 7.2 0 0 0 .239-1.826c0-2.09-1.107-3.971-2.55-5.267c0 0-.445-.43-.813-.7c-1.318-1.025-6.675-3.648-8.426-4.742c-3.776-1.82-3.085-5.4 1.172-6.563v7.24m3.729-7.995c.53.066 1.027.305 1.457.568c.423.237.612.43.818.58c.256.191.66.585 1.133 1.22c.473.638.82 1.447.934 1.791c.084.25.195.78.248 1.087l.066.41h.573v-6.295h-.482l-.254.386c-.23.295-.439.4-.884.448c-.515.058-1.177-.223-1.177-.223l-.975-.39c-.62-.245-.94-.37-1.457-.528m-4.03-7.36a2.164 2.164 0 1 0 4.33-.002a2.164 2.164 0 0 0-4.33.001"></svg:path>`,
})
export class ArcticonsIscepIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIservIcon],svg[arcticons-iserv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.456 21.472l-2 5.3l-2-5.3m-4.159 2.15c0-1.1.9-2 2-2m-2 0v5.3" class="b"></svg:path><svg:g class="b"><svg:circle cx="13.296" cy="19.172" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.296 21.572v5.3"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.657 26.472c.4.3.8.4 1.6.4h.4c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3h-.9c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3h.4c.9 0 1.3.1 1.6.4" class="b"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.827 25.772c-.3.6-1 1-1.7 1c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2s2 .9 2 2v.7h-4m-.5 4.628l14.83.056"></svg:path><svg:circle cx="13.293" cy="28.828" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.817" cy="28.828" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.34" cy="28.828" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsIservIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIshtarCommanderIcon],svg[arcticons-ishtar-commander-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="7.167" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="1.433" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.536 5.08L29.347 16.47m11.971-7.682l-9.913 9.658m.325 10.856l9.685 9.593M29.7 31.47l11.165 11.14M23.94 33.417l.03 2.668m-5.616-4.575L7.399 42.61m8.964-13.174l-9.771 9.556m8.144-13.905l-6.755.014m6.844-2.621l-6.683-.028M16.6 18.44L6.624 8.594m12.203 7.758L7.557 5m16.478 6.34l-.064 3.443M33.16 22.4l6.672.053m-6.566 2.615l6.663.033"></svg:path><svg:circle cx="24" cy="24.1" r="9.317" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="11.467" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="18.633" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsIshtarCommanderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIsicIcon],svg[arcticons-isic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.786 16.289v15.526m30.428-5.265a5.182 5.182 0 1 1-10.364 0v-5.183a5.16 5.16 0 0 1 5.182-5.182a5 5 0 0 1 4.99 5.183m-26.656 8.689a4.65 4.65 0 0 0 3.903 1.756h2.342a3.903 3.903 0 0 0 0-7.806h-2.537a3.903 3.903 0 0 1 0-7.805h2.342a4.19 4.19 0 0 1 3.903 1.756m3.363-1.757v15.612"></svg:path>`,
})
export class ArcticonsIsicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIslam360Icon],svg[arcticons-islam360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="5.115" height="23" x="29.767" y="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.387" ry="1.387"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.443 24.694c0-.766.62-1.388 1.387-1.388h2.34c.766 0 1.387.621 1.387 1.388v9.419c0 .766-.62 1.387-1.387 1.387h-2.34a1.387 1.387 0 0 1-1.387-1.387V13.887c0-.766.62-1.387 1.387-1.387h2.34c.766 0 1.387.621 1.387 1.387v4.129m-13.438-4.129v4.129m-.001 11.968v4.129m1.388-10.665h2.34c.766 0 1.387.621 1.387 1.388v9.277c0 .766-.62 1.387-1.387 1.387h-2.34a1.387 1.387 0 0 1-1.388-1.387"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.846 23.448c.766 0 1.387-.62 1.387-1.387v-8.174c0-.766-.62-1.387-1.387-1.387h-2.34c-.766 0-1.388.621-1.388 1.387"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsIslam360Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIslandIcon],svg[arcticons-island-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.16 34.53H4.5l11.83-15l3.28 4.15l7.81-10.24L43.5 34.53Zm0 0l-8.55-10.82"></svg:path>`,
})
export class ArcticonsIslandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIslandBargainsIcon],svg[arcticons-island-bargains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="23.069" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.346" cy="9.579" r="3.841" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.168 26.907c-3.981-2.16-9.673.42-11.747 4.822c-.926-10.486 6.925-14.523 13.71-8.495c-.477-3.954-2.215-7.935-7.094-8.243c2.748-1.458 10.963-.926 11.888 5.803c4.486-3.259 9.42-2.782 13.43 2.433c-5.523-3-10.177-.057-11.748 2.915c5.44-1.401 10.823.505 11.748 4.963"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.236 30.13c-1.478 4.319-2.373 9.057-2.697 13.108m21.519-7.114c-1.432-4.85-7.095-5.993-11.049-4.907c-2.467 4.262-2.658 13.352-2.658 13.352"></svg:path>`,
})
export class ArcticonsIslandBargainsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIslandsOfArgentaIcon],svg[arcticons-islands-of-argenta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4m9.711 8.599c.216-1.046-.502-2.012-1.651-1.884c-.208-1.308-1.7-1.414-2.238-.826c-.897-2.232-4.077-1.826-4.009.783c-1.76-.48-2.189.666-2.11 1.975c3.336.021 6.672-.026 10.008-.049Zm-.583 13.959h13.254m10.618.062l-7.635-.012M5.5 28.12l8.526-.01m7.076-6.86l-1.125 1m-.088-2.625h1.306M21.103 18l-1.125-1m11.578 4.25l1.125 1m.087-2.625h-1.306M31.555 18l1.125-1m-6.352 1.73v10.656m-3.158.383v-8.803m.074-2.212c.864-.33 2.172-.3 3.084-.337m-3.675 2.371l1.253-.16l1.542-.026l.876-.007m-.599-6.634v-.35l-.283-.491l.002-.34c.128-.09.744-.51.892-.548m-.61 1.729c-2.145.623-2.558 2.477-2.585 4.519c-.21.221-.427.089-.563.248l.565.148l.011.986l.004.602m6.318 8.888v-8.386m-.074-2.212c-.864-.33-2.138-.3-3.05-.337m3.64 2.371l-1.252-.16l-1.56-.04l-.856.007m.597-6.634v-.35l.283-.491l-.002-.34c-.128-.09-.718-.51-.866-.548m.585 1.729c2.258.647 2.569 2.51 2.584 4.519c.21.221.427.089.563.248l-.565.148l-.011.986l-.003.602M5.5 34.694c.907-.113 1.564-.69 2.507-.503c-.75 2.031 2.054 1.232 2.783.757m21.427 4.671c1.08.595 1.928-.66 2.498-.706c.598 1.81 2.328-.072 2.584.067c.218.844 1.476.881 2.028.623m-27.776-.379c.74.037 2.556-1.118 3.178-1.08c.334 2.362 2.903.167 3.37.19c-.188 1.374 1.943 1.095 2.762.665m-4.537-9.503l-.824-.366l-.94-.618l-.189-.846s-.228-1.327-.235-1.418c-.023-.32.076-1.187.212-1.441c.117-.22.164-1.441.164-1.441s.424-1.624.471-1.716s.447-.763.447-.763l.33-.394s.61-.663.681-.571s.636.526.753.732c.118.206.283.416.283.416l.258.489s.024.709.141.892c.118.183.236.572.306.938c.018.09.001.612.005.891c.006.421.122.916.136 1.053c.024.229.024.87-.023 1.372c-.047.504-.047.344-.047.504s-.094.709-.094.709s-.212.572-.306.732s-.541.64-.541.64zm.07.317l.017 2.157m16.762-.48l-.55-.259l-.631-.438l-.126-.6s-.153-.94-.158-1.005c-.015-.227.051-.841.142-1.022c.079-.156.11-1.021.11-1.021s.284-1.152.316-1.217c.031-.065.299-.541.299-.541l.22-.279s.41-.47.457-.405s.426.373.504.519c.08.145.19.295.19.295l.173.346s.016.503.094.633c.08.13.158.405.205.665c.012.064 0 .434.003.632c.004.298.082.649.092.746c.015.162.015.616-.016.973c-.032.357-.032.243-.032.357s-.063.503-.063.503s-.142.405-.205.519s-.362.454-.362.454zm.047.226l.011 1.152m-20.203.931c.286.371 2.425 1.055 3.05 1.426c1.094.692 2.19.863 3.439.693c2.601-.131 3.826 2.33 8.923.602c1.225-.43 3.325.328 5.53.167c1.12-.167 2.122-1.323 3.399-1.03c.969.421 2.642-.42 3.43-.913c-.96-.866-1.435-1.553-2.503-1.816c-.57-.471-1.02-1.124-1.73-1.385c-1.446-.824-2.043-.985-2.278-.863m-21.26 3.12c2.587-1.858 6.344-2.943 9.268-3.82c0 0 1.893-.474 2.195-.474s3.557.06 3.557.06s2.472.06 2.773.15c.08.024.955.052 1.045.477"></svg:path>`,
})
export class ArcticonsIslandsOfArgentaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIslandsOfArgenta2Icon],svg[arcticons-islands-of-argenta-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.133 10.42a1.777 1.777 0 1 1-1.777-1.777h0c.981 0 1.776.796 1.776 1.777"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.685 23.865l-.348 13.742m-11.232-4.722c.796.413 1.597.822 2.485 1.143c.533.083 1.335.166 2.038.249c.455-.014 1.272-.148 1.988-.249m-9.344-13.667c1.032.264 2.058.484 3.18 1.292c1.252 1.183 1.941 2.433 1.94 2.435l1.789 2.635m-16.004-13.47c.166.199.88.398 1.491.596c.455.112.857.427 2.038.176c.895-.124 1.486-.365 2.195-.582a3.7 3.7 0 0 0 1.342-1.368M20.88 33.53l-.192 3.28c-.031.647.16 1.074.398 1.542c.641.452 1.08.571 1.54.573c.92.054 1.57-.04 2.581-.064c.588-.29 1.014-.742 1.042-1.591l.105-1.702l-.05-1.938m-4.721-3.082c-.25.64-.58 1.268-.646 1.939l-.1 1.774c-.029.498.527.96 1.094 1.407c1.027.442 2.054.192 3.081 0c.508-.26.97-.649 1.193-1.442c-.014-.58-.053-1.16-.199-1.74c-.165-.679-.523-1.358-.845-2.037zm6.411-.745l1.193.845c.812.43 1.164.451 1.64.546l2.833-2.982l3.802-4.672l.92-.546l.596-.2l.348-1.64l-.397-1.292l-1.144-.248l-.795.348l-.1-.795l-1.242 1.342l-.149 1.192l-5.675 3.755m7.812-5.742l.05-3.976c1.176-.381 2.338-.828 3.33-2.038c.479-.862.926-1.73.944-2.684c.113-.895.205-1.79-.05-2.684c-.29-.584-.585-1.17-1.242-1.938c-.625-.35-1.04-.805-2.187-.895M10.747 28.313l-.646 2.982l-.795 4.821l-.696 5.219m4.771-19.483c.754 1.302 1.553 2.547 2.585 3.479c1.166 1.307 2.257 2.238 3.33 3.081c1.04.925 1.592 1.36 2.286 1.939m-9.99-8.947c-.832.87-1.639 1.791-2.286 3.032c-.872 1.636-1.435 3.396-1.839 5.219c-.437 1.955-.743 3.91-.994 5.864l-.547 4.623c1.014.946 1.906 1.165 2.833 1.59c2.75.609 5.5.688 8.25.746c2.75.14 5.501-.397 8.251-.995a51 51 0 0 0 7.008-2.137c.513-.91.843-1.822.795-2.733l-.994-6.362M12.695 11.904c-.929.62-2.924 2.13-3.975 3.03c-1.03 1.143-1.394 2.082-1.253 2.842c.128.762.653 1.524 1.342 2.286c1.22.772 2.28 1.293 3.876 1.442l5.219-.298l6.113-.994c.383-.15 2.547-1.174 3.43-1.84c.526-.374 2.53-2.505 3.18-4.373c.355-1.11.702-2.22.05-3.33c-.588-.643-1.95-1.38-3.096-1.439c-.908-.087-2.06-.056-3.33.118a22.6 22.6 0 0 0-3.262.54m-6.496 1.856l-1.063 3.1c.76.756 2.018 1.097 3.33 1.391c1.57.106 2.936-.192 4.225-.646c.639-.204 1.17-.934 1.342-1.441m0 0c-.854-2.187-1.828-5.674-2.684-6.56c-.474-.498-2.186-2.009-3.877-1.94c-1.072.148-3.494 1.733-5.324 3.363c-.888.89-2.85 2.323-1.982 3.178c.652.953 3.338-.206 4.54-.399c.908-.126 1.324-.507 2.27-.289"></svg:path>`,
})
export class ArcticonsIslandsOfArgenta2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIsoExtractorAndArchiverIcon],svg[arcticons-iso-extractor-and-archiver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.451 16.415v15.172m4.797-1.661c.93 1.211 2.097 1.662 3.72 1.662h2.246a3.785 3.785 0 0 0 3.785-3.785v-.016a3.785 3.785 0 0 0-3.785-3.785h-2.478a3.79 3.79 0 0 1-3.789-3.788h0c0-2.098 1.7-3.798 3.798-3.798h2.233c1.623 0 2.79.451 3.72 1.663m9.818 13.508a5.026 5.026 0 0 1-5.025-5.025V21.44a5.026 5.026 0 1 1 10.05 0v5.12a5.026 5.026 0 0 1-5.025 5.026"></svg:path>`,
})
export class ArcticonsIsoExtractorAndArchiverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIsotopebrowserIcon],svg[arcticons-isotopebrowser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.648 39.375c-3.729.86-6.906-8.873-7.864-14.287S15.334 9.262 19.32 8.603s6.881 9.403 7.785 14.808s1.27 15.104-2.458 15.964"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.548 19.785c.917-3.6 14.389-3.429 21.178-1.957s18.638 6.447 17.724 10.13s-13.495 4.159-20.37 2.772S3.63 23.385 4.548 19.785"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.41 30.159c-1.172-2.476 6.947-8.58 11.692-10.727s14.16-4.144 15.294-1.65s-6.368 8.234-11.084 10.444s-14.73 4.41-15.902 1.933"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.408 12.174c2.158 1.405-.538 9.908-2.802 14.1s-8.075 11.02-10.163 9.833s.717-10.337 3.02-14.506s7.788-10.832 9.945-9.427"></svg:path><svg:circle cx="22.047" cy="24.089" r=".8" fill="currentColor"></svg:circle>`,
})
export class ArcticonsIsotopebrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIssDetectorIcon],svg[arcticons-iss-detector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.265 15.644h3.47M24 14.248v16.82m19.5-13.073l-4.434 15.756m1.227-15.756l-3.621 15.756m.516-15.756l-2.81 15.756m-.533-15.756l-2.064 15.756m-.115-11.95l-5.908-.081m6.15-1.598l-6.15.05m5.31 3.297l-5.311-.2m6.377-4.881l-6.378.24M4.5 17.996l4.434 15.756M7.707 17.996l3.622 15.756m-.517-15.756l2.81 15.756m.533-15.756l2.064 15.756m.115-11.951l5.908-.081m-6.15-1.597l6.15.05m-5.31 3.296l5.311-.2m-6.377-4.881l6.378.24m6.743 10.612h-7.348m-1.014 2.166h6.223m-18.213-4.38h30.73"></svg:path>`,
})
export class ArcticonsIssDetectorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIstanbulkartIcon],svg[arcticons-istanbulkart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 41.07s14.58-9.026 16.471-19.348c1.172-6.402-3.936-10.493-8.852-10.493c-3.237 0-6.06 1.733-7.619 4.316c-1.558-2.583-4.382-4.316-7.618-4.316c-4.916 0-10.027 4.092-8.852 10.493C9.424 32.043 24 41.07 24 41.07m18.5-8.05a20.58 20.58 0 0 1-9.48 9.48m-18.04 0a20.58 20.58 0 0 1-9.48-9.48m0-18.04a20.58 20.58 0 0 1 9.48-9.48m18.085.022a20.58 20.58 0 0 1 9.413 9.413"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.063 5.527h9.41v9.41m0 18.07v9.466h-9.467m-18.012 0H5.527v-9.467m0-18.012V5.527h9.467"></svg:path>`,
})
export class ArcticonsIstanbulkartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIstegelsinIcon],svg[arcticons-istegelsin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18.026" cy="22.301" r=".8" fill="currentColor"></svg:circle><svg:circle cx="30.015" cy="25.814" r=".8" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.799 34.266v4.104"></svg:path><svg:circle cx="30.799" cy="32.443" r=".8" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.021 18.736h8.132m2.404 3.565h-9.57m-3.544 3.513h9.408m-6.83 3.45h8.132m-11.869 5.002c0-1.14-.912-2.052-2.052-2.052s-2.052.912-2.052 2.052v2.052c0 1.14.912 1.976 2.052 1.976s2.052-.912 2.052-1.976h-2.052m16.525-21.127c-.228.456-.76.76-1.292.76c-.836 0-1.52-.684-1.52-1.52v-.988c0-.836.684-1.52 1.52-1.52s1.52.684 1.52 1.52v.532h-3.04m-8.231 1.672c.304.228.608.304 1.216.304h.304c.532 0 .988-.456.988-.988s-.456-.988-.988-.988h-.684c-.532 0-.988-.456-.988-.988s.456-.988.988-.988h.304c.684 0 .988.076 1.216.304m-1.025 25.231c-.228.456-.76.76-1.292.76c-.836 0-1.52-.684-1.52-1.52v-.988c0-.836.684-1.52 1.52-1.52s1.52.684 1.52 1.52v.532h-3.04m14.545 2.052v-4.104m3.04 4.104v-2.508c0-.836-.684-1.52-1.52-1.52s-1.52.684-1.52 1.52m-9.556-3.648v5.32c0 .456.304.76.76.76h.228m2.104-.304c.304.228.608.304 1.216.304h.304c.532 0 .988-.456.988-.988s-.456-.988-.988-.988h-.684c-.532 0-.988-.456-.988-.988s.456-.988.988-.988h.304c.684 0 .988.076 1.216.304m-4.496-22.723h1.672m-.836-1.216v4.56c0 .456.304.76.76.76h.228m-8.683-6.08v6.08"></svg:path><svg:circle cx="17.312" cy="7.324" r=".8" fill="currentColor"></svg:circle>`,
})
export class ArcticonsIstegelsinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIsuzuIcon],svg[arcticons-isuzu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.19 27.24h7.779a1.011 1.011 0 0 0 .327-1.968l-7.43-2.545a1.011 1.011 0 0 1 .328-1.968h7.786m1.683.001v4.963c0 .838.68 1.518 1.518 1.518h4.301c.838 0 1.518-.68 1.518-1.518h0V20.76m12.163 0v4.963c0 .838.68 1.518 1.518 1.518h4.301c.838 0 1.518-.68 1.518-1.518V20.76m-39 0v6.48m29.972 0h-7.778a1.011 1.011 0 0 1-.328-1.968l7.43-2.545a1.011 1.011 0 0 0-.328-1.968h-7.785"></svg:path>`,
})
export class ArcticonsIsuzuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsItalkiIcon],svg[arcticons-italki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 16.5v15a2 2 0 0 0 2 2h28l5 6v-6h2a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2"></svg:path>`,
})
export class ArcticonsItalkiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsItaloTrenoIcon],svg[arcticons-italo-treno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:circle cx="10.201" cy="29.541" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.673 26.77a3.013 3.013 0 0 1-3.004 3.005h0a3.013 3.013 0 0 1-3.004-3.004v-1.953a3.013 3.013 0 0 1 3.004-3.004h0a3.013 3.013 0 0 1 3.004 3.004m0 4.957v-7.961m3.004-4.056v10.514c0 .901.601 1.502 1.502 1.502h.451M16.661 19.26v10.515m-1.652-7.961h3.154"></svg:path><svg:circle cx="12.396" cy="19.494" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.396 21.814v7.961m23.1 0a3.013 3.013 0 0 1-3.004-3.004v-1.953a3.013 3.013 0 0 1 3.004-3.004h0a3.013 3.013 0 0 1 3.004 3.004v1.953a3.013 3.013 0 0 1-3.004 3.004"></svg:path>`,
})
export class ArcticonsItaloTrenoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsItaxIcon],svg[arcticons-itax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.717 32.104s-2.782 1.822-9.794 1.822c-7.015 0-9.423-1.565-9.423-1.565v5.042s2.408 1.565 9.423 1.565s9.79-1.826 9.79-1.826l.57-1.322s2.779-1.822 9.794-1.822s9.423 1.565 9.423 1.565V30.52s-2.408-1.565-9.423-1.565s-9.79 1.822-9.79 1.822zm0-9.964s-2.782 1.826-9.794 1.826C6.908 23.966 4.5 22.4 4.5 22.4v5.039s2.408 1.564 9.423 1.564s9.79-1.822 9.79-1.822l.57-1.322s2.779-1.822 9.794-1.822s9.423 1.564 9.423 1.564V20.56s-2.408-1.565-9.423-1.565s-9.79 1.822-9.79 1.822zm0-9.96s-2.782 1.823-9.794 1.823c-7.015 0-9.423-1.565-9.423-1.565v5.042s2.408 1.565 9.423 1.565s9.79-1.822 9.79-1.822l.57-1.323s2.779-1.826 9.794-1.826S43.5 15.64 43.5 15.64v-5.042s-2.408-1.565-9.423-1.565s-9.79 1.826-9.79 1.826z"></svg:path>`,
})
export class ArcticonsItaxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsItelLauncherIcon],svg[arcticons-itel-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22.248" cy="10.214" r="5.715" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.747 19.456h4.005c4.144 0 6.906 2.366 7.422 6.345L31.467 43.5H20.863z"></svg:path>`,
})
export class ArcticonsItelLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsItiitaIcon],svg[arcticons-itiita-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z"></svg:path><svg:circle cx="17.029" cy="17.568" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.029 21.452v9.73"></svg:path><svg:circle cx="30.971" cy="17.568" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.971 21.452v9.73M23.967 17.49v11.29a2.4 2.4 0 0 0 2.402 2.402h.72m-5.644-9.73h5.044"></svg:path>`,
})
export class ArcticonsItiitaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsItrAisIcon],svg[arcticons-itr-ais-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 14.5v8m12 0v-8h2.6c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7h-2.6m2.6-.1l2.6 2.6m-13.2-7.9h5.2m-2.6 8v-8m5.5 19.1c.5.6 1.1.9 2 .9h1.2c1.1 0 2-.9 2-2s-.9-2-2-2h-1.3c-1.1 0-2-.9-2-2s.9-2 2-2h1.2c.9 0 1.5.2 2 .9m-10.2-.9v8M18 31.8h-3.6m-.9 2.7l2.7-8l2.7 8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsItrAisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsItslearningIcon],svg[arcticons-itslearning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:circle cx="14.413" cy="14.88" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.413 18.913V31.87m11.574-1.093c.892.75 1.856 1.093 4.02 1.093h1.098a3.236 3.236 0 0 0 3.232-3.239h0a3.236 3.236 0 0 0-3.232-3.24H28.91a3.236 3.236 0 0 1-3.232-3.238h0a3.236 3.236 0 0 1 3.232-3.24h1.097c2.164 0 3.128.344 4.02 1.094M20.068 14.88v14.545a2.445 2.445 0 0 0 2.444 2.445h.734m-5.745-12.957h5.133"></svg:path>`,
})
export class ArcticonsItslearningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsItsmeIcon],svg[arcticons-itsme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.317 31.756a3.611 3.611 0 0 1 7.222 0v5.778m-7.223-9.389v9.389m7.223-5.778a3.611 3.611 0 0 1 7.222 0v5.778m8.985-1.806a3.5 3.5 0 0 1-3.07 1.805a3.62 3.62 0 0 1-3.611-3.61v-2.348a3.611 3.611 0 0 1 7.222 0v1.264h-7.222"></svg:path><svg:circle cx="12.405" cy="11.697" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.69 23.238a4.57 4.57 0 0 0 3.095.774h.775a2.516 2.516 0 0 0 0-5.031h-1.742a2.516 2.516 0 0 1 0-5.031h.774c1.742 0 2.516.193 3.096.774"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="8.148" d="M12.4 22.077a1.827 1.827 0 0 0 1.934 1.935a3.6 3.6 0 0 0 2.613-.774m.194-12.772v11.61a1.827 1.827 0 0 0 1.935 1.936a3.6 3.6 0 0 0 2.613-.774"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.141 13.756h2.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="8.148" d="m12.4 22.077l.006-8.32"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsItsmeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsItvxIcon],svg[arcticons-itvx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.332 29.34l-3.802-5.23q-.12-.166-.004-.334l3.518-5.113c.102-.145.173-.257.173-.474c0-.187-.125-.415-.317-.608s-.39-.285-.643-.285c-.143 0-.271.06-.411.167l-4.818 3.698c-.116.09-.237.09-.353 0l-4.816-3.698c-.14-.108-.27-.167-.412-.167c-.255 0-.45.092-.643.285c-.192.192-.317.421-.317.608c0 .217.07.329.173.474l3.518 5.113q.117.168-.004.334l-3.801 5.23c-.102.14-.165.264-.165.431c0 .24.105.439.298.631s.403.302.635.302c.164 0 .29-.065.43-.166l5.113-3.72a.29.29 0 0 1 .34 0l5.113 3.72c.14.102.265.166.43.166c.232 0 .443-.109.636-.301s.297-.391.297-.632c-.004-.165-.066-.291-.168-.432m-22.942-7.08c1.072 1.274 2.811 4.623 3.896 6.81c.424.854 1.646.874 2.088.029c1.252-2.4 2.15-4.7 2.938-6.941"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.877 24.515c.442.781-.589 5.206-4.732 5.206s-4.462-2.27-4.462-3.782v-7.724m3.948 4.89h-3.948m0 2.834c0 2.046-1.265 3.782-3.907 3.782s-3.532-1.519-3.532-3.782v-3.914"></svg:path><svg:circle cx="5.244" cy="19.254" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsItvxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIuMobileIcon],svg[arcticons-iu-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.15 43.5h11.7m-11.7-39h11.7M24 4.5v39M11.325 11.813v12.024C11.325 31.15 17.175 37 24 37s12.675-5.85 12.675-13.163V11.813m-3.9-.271h7.8m-33.15 0h7.8"></svg:path>`,
})
export class ArcticonsIuMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIubilaeum25Icon],svg[arcticons-iubilaeum25-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.85 34.04c-.97-.119-2.754-.596-3.487-.933L7.127 33l.355-.072c.837-.168 1.33-.316 1.79-.536c1.325-.634 2.501-1.779 3.411-3.318c.328-.555.978-1.976 1.216-2.66l.138-.394l.741.719c1.412 1.367 2.93 2.22 5.186 2.911c.408.125.724.254.724.294c0 .097-1.015 1.053-1.718 1.617a11.8 11.8 0 0 1-5.284 2.399c-.652.114-2.197.158-2.836.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.037 26.018c.122-.122 4.76.73 4.76.895c0 .038-.592 1.792-.627 2.083m1.57-2.754c.222-.124 4.127-.425 4.421-.243c.082.05-.162 1.862-.215 2.03"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.384 28.494c-.082 1.006.214-1.76.267-2.064c.018-.105.057-.192.087-.192s.275.151.544.335c.913.624 2.087 1.104 3.434 1.404c.933.208 1.529.27 2.564.27c.497 0 .903.012.903.025c0 .055-.594 1.049-.88 1.474c-.949 1.405-2.397 2.774-3.832 3.621c-1.429.844-3.138 1.383-4.663 1.47c-.32.017-.688.039-.818.047s-.422.007-.65-.001h0c-.502-.02-2.308.021-3.735-.831"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.295 28.22c-.078-.292-.42-3.172-.381-3.21c.017-.017.237.065.489.183c.536.25 1.232.458 2.158.646c.583.118.836.134 2.082.132c.79 0 1.693-.035 2.039-.078c.589-.072 1.731-.271 1.973-.343c.102-.03.11-.01.076.23c-.087.635-.81 2.476-1.347 3.432q-2.788 4.96-8.087 6.278c-.823.205-2.273.44-2.69.437l-.237-.002c1.391-1.073 3.02-1.88 3.83-4.789"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.908 25.009s2.37-1.446 3.725-1.523c.875-.049.809 1.588 1.004 2.484"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.147 25.437c-.174-.676-.357-2.78-.397-2.884c-.04-.102-.033-.108.047-.043c.203.165 1.25.372 2.16.428c1.013.061 2.73-.007 3.767-.148c1.156-.159 3.165-.733 4.16-1.19c.24-.11.452-.186.469-.169c.058.058-.172 1.816-.348 2.661c-.67 3.22-2.09 5.862-4.32 8.037c-1.061 1.035-2.359 1.974-3.57 2.584c-.983.494-3.004 1.198-4.014 1.398c-.195.039-.408.085-.473.102s.19-.284.567-.67h0c.377-.384.856-.912 1.064-1.171c.208-.26 2.68-4.685 3.12-5.152"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.729 22.46c.215-.173 2.467-1.546 3.234-1.848c.72-.283 2.665-.966 2.691-.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.692 19.994c-.036-.09-.156-.59-.267-1.11c-.677-3.17-1.352-5.59-1.583-5.68c-.04-.014-.823.16-1.74.388c-2.218.552-3.353.787-3.632.751c-.69-.088-1.13-.87-.816-1.458c.177-.332.536-.511 1.368-.682c1.76-.36 3.867-.917 4.013-1.06c.122-.121-.086-.707-.838-2.363c-.784-1.729-.994-2.274-.947-2.458c.109-.426.59-.822.998-.822c.255 0 .682.236.83.459c.171.258.643 1.384 1.117 2.663c.537 1.453.68 1.788.781 1.826c.207.08 1.779-.567 3.55-1.46c1.398-.704 1.563-.736 1.955-.382c.52.47.523 1.011.009 1.503c-.434.415-2.234 1.336-4.17 2.134c-.414.17-.765.342-.78.383s.052.389.15.773c.406 1.592.958 4.665.974 5.431l.01.42l-.346.394c-.45.513-.55.568-.636.35m-.214 1.998l.247.789c-.045-.018-.459-1.142-.459-1.215c0-.025.03-.06.067-.077c.083-.038.63-.462.982-.763c.404-.344.819-.757.977-.972c.079-.107.151-.184.162-.172c.058.067.145.997.146 1.564l.065 1.208"></svg:path><svg:ellipse cx="28.832" cy="19.678" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.291" ry="1.37"></svg:ellipse><svg:ellipse cx="24.113" cy="22.247" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.152" ry="1.222"></svg:ellipse><svg:ellipse cx="19.689" cy="23.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.069" ry="1.134"></svg:ellipse><svg:ellipse cx="15.104" cy="23.531" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.028" ry="1.091"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.059 32.938c-.693 3.217-1.641 6.275-2.886 9.152c-1.34-.576-2.444-1.498-3.154-3.004c-.088-.378-.082-.845.463-1.818m2.692 4.823s1.533.91 4.625.015c.312-.344.717-.725.776-1.238m-8.092-3.598l.204.743m7.889 2.855l-.66.25M9.027 39.196c4.902 3.093 8.936 1.57 11.275-.251c4.344 3.012 7.124 2.228 9.193 1.19"></svg:path>`,
})
export class ArcticonsIubilaeum25Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvacyIcon],svg[arcticons-ivacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.568 11.755C11.348 8.015 16.598 5.5 24 5.5s12.652 2.515 17.432 6.255C42.223 29.297 33.377 39.51 24 42.5C14.623 39.509 5.777 29.297 6.568 11.755"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.012 17.345c-2.337-1.519-4.888-2.483-8.012-2.483s-5.675.964-8.012 2.483c-.482 7.259 2.925 12.864 8.012 14.48c5.087-1.616 8.494-7.221 8.012-14.48m-16.176-.09L6.8 11.893M24 31.865v10.496"></svg:path>`,
})
export class ArcticonsIvacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvcamIcon],svg[arcticons-ivcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="20" r="15.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="20" r="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.572" cy="15.174" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 38.182c-3.035 0-5.784.344-7.894.953c-1.055.304-1.954.67-2.676 1.163s-1.328 1.2-1.328 2.062c0 .63.615 1.14 1.373 1.14h21.05c.758 0 1.373-.51 1.373-1.14c0-.862-.606-1.57-1.328-2.062s-1.622-.859-2.676-1.163c-2.11-.61-4.859-.953-7.894-.953"></svg:path>`,
})
export class ArcticonsIvcamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIviIcon],svg[arcticons-ivi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m24.11 27.48l-3.36-5.96l-3.34 5.96zm13.58 6.85l5.81-3.43l-5.81-3.45zm0-6.89l5.81 3.45v-6.88zm-10.19 6l3.34-5.96h-6.7z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m27.48 21.52l-3.34 5.96h6.7zm3.36 5.93l3.37-5.96h-6.73zm6.85-6.89l5.81-3.42v-.03l-5.81-3.42zm0 6.88v.02l5.81-3.45l-5.81-3.45zM4.5 20.55l5.81-3.42v-.03L4.5 13.68zm0 6.87v.03L10.31 24L4.5 20.55zm16.26 6.02h6.73l-3.36-5.96z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m17.41 27.48l3.37 5.96l3.33-5.96zm-3.35-5.99l3.37 5.96l3.33-5.96zM4.5 34.32l5.81-3.42l-5.81-3.45zm5.81-3.43v-6.88L4.5 27.44z"></svg:path>`,
})
export class ArcticonsIviIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvmsIcon],svg[arcticons-ivms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="8.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 24h6.23m30.54 0h6.23"></svg:path>`,
})
export class ArcticonsIvmsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvonaenglishIcon],svg[arcticons-ivonaenglish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M33.614 36.43h-6.08V26.338a3.53 3.53 0 0 0-1.474-2.873l-8.639-6.195a3.535 3.535 0 1 0-4.12 5.744l7.164 5.138v8.278h-6.079a3.535 3.535 0 0 0 0 7.07h19.228a3.535 3.535 0 0 0 0-7.07Z"></svg:path><svg:circle cx="27.27" cy="11.917" r="7.417" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.854 11.917h14.833m-7.417 7.416V4.5m-5.962 11.816l11.924-8.799m-11.924 0l11.924 8.799"></svg:path>`,
})
export class ArcticonsIvonaenglishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvonafrenchIcon],svg[arcticons-ivonafrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M33.614 36.43h-6.08V26.338a3.53 3.53 0 0 0-1.474-2.873l-8.639-6.195a3.535 3.535 0 1 0-4.12 5.744l7.164 5.138v8.278h-6.079a3.535 3.535 0 0 0 0 7.07h19.228a3.535 3.535 0 0 0 0-7.07Z"></svg:path><svg:circle cx="27.27" cy="11.917" r="7.417" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.591 18.548V5.285M23.95 18.548V5.285"></svg:path>`,
})
export class ArcticonsIvonafrenchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvonatexttospeechIcon],svg[arcticons-ivonatexttospeech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M33.614 36.43h-6.08V26.338a3.53 3.53 0 0 0-1.474-2.873l-8.639-6.195a3.535 3.535 0 1 0-4.12 5.744l7.164 5.138v8.278h-6.079a3.535 3.535 0 0 0 0 7.07h19.228a3.535 3.535 0 0 0 0-7.07Z"></svg:path><svg:circle cx="27.27" cy="11.917" r="7.417" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsIvonatexttospeechIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvpnIcon],svg[arcticons-ivpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c9.043-3.117 15.489-10.363 16.5-19.589c.28-4.005.257-8.025-.071-12.027a2.54 2.54 0 0 0-2.468-2.366c-4.091-.126-8.846-.808-12.52-4.427a2.05 2.05 0 0 0-2.881 0c-3.675 3.619-8.43 4.301-12.52 4.427a2.54 2.54 0 0 0-2.468 2.366A79.4 79.4 0 0 0 7.5 23.911C8.512 33.137 14.957 40.383 24 43.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 17.321s.185.491.448 1.151c.107.27.367.448.657.45c1.37.004 3.823.018 6.179-.151L24 30.679l4.716-11.908c2.357.169 4.81.155 6.18.15c.29 0 .55-.18.657-.449c.262-.66.447-1.15.447-1.15M15.776 27.341c.288.834.438.717 3.258.717h.733"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.147 22.955c.288.834.438.717 3.258.717h1.148m13.671 3.669c-.288.834-.438.717-3.258.717h-.733m5.62-5.103c-.288.834-.438.717-3.258.717h-1.148"></svg:path>`,
})
export class ArcticonsIvpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvpnAltIcon],svg[arcticons-ivpn-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.457 18.573h1.628m0 0l-1.914 10.854m11.038 0l1.913-10.853h3.553c2.009 0 3.35 1.631 2.995 3.644s-2.271 3.645-4.28 3.645h-3.553m8.516 3.564l1.914-10.854l5.276 10.854l1.914-10.854m-18.262 0l-5.509 10.854l-1.681-10.854"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z"></svg:path>`,
})
export class ArcticonsIvpnAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvyWalletIcon],svg[arcticons-ivy-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.312 38.862H11.688A6.32 6.32 0 0 1 5.5 33.817h0a48.7 48.7 0 0 1 0-19.634h0a6.32 6.32 0 0 1 6.188-5.045h24.624a6.32 6.32 0 0 1 6.188 5.045h0a48.7 48.7 0 0 1 0 19.634h0a6.32 6.32 0 0 1-6.188 5.045"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 18L24 30l7.5-12"></svg:path>`,
})
export class ArcticonsIvyWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIwaraIcon],svg[arcticons-iwara-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.022 20.748c-6.041-9.805.826-15.383 6.972-15.247c6.369.142 12.599 6.716 3.695 14.244"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.33 11.488a16.8 16.8 0 0 1 4.957-.497c1.904-.18 1.448 2.41-.54 5.15a13.26 13.26 0 0 1-5.488 4.437m-3.57-.833c1.333.82 1.998 1.191 3.57.833c11.192 8.9 3.758 20.604-2.98 21.923"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.28 42.5l-15.667-.2C.965 39.036 5.84 20.96 7.709 20.98c10.778 4.46 15.445-.72 13.313-.232"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.86 25.792c1.845 1.027 3.146 2.135 3.43 3.29c.903 3.657-1.414 6.565-5.878 7.57a14.05 14.05 0 0 1-12.683-3.71m13.19-23.927c-1.59-.01-4.48 3.284-3.883 5.347"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.755 28.064l.402 2.273l-3.348.4m5.891-2.539l-2.945-.134m3.528-11.589v.004"></svg:path><svg:circle cx="30.304" cy="13.159" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.155" cy="31.249" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsIwaraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIwscanIcon],svg[arcticons-iwscan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.333 32.697c0-6.727 5.453-12.18 12.18-12.18h0m19.594-7.86c1.395 7.908-1.118 15.38-4.467 22.76c-3.156-6.185-4.128-13.677-4.343-22.81c.414 9.155-1.927 16.315-5.815 22.76c-2.751-6.848-5.562-13.666-3.968-22.785M4.5 32.515c0-11.009 8.924-19.933 19.932-19.933"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.816 31.13a3.876 3.876 0 1 1-.906-2.559"></svg:path>`,
})
export class ArcticonsIwscanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIxigoTrainsIcon],svg[arcticons-ixigo-trains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.12 26.61s-8.54 2.634-18.904-16.63h-2.09V7.161H9.398v3.106H8.227s-1.786-.74-3.508 8.208v10.317s.143 4.6 2.848 4.933s34.266 0 34.266 0s2.735-2.863.288-7.117Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.785 21.187a1.42 1.42 0 0 1 1.42 1.42v3.154a1.42 1.42 0 0 1-2.84 0v-3.154a1.42 1.42 0 0 1 1.42-1.42m4.385 3.393a1.22 1.22 0 0 1 1.222 1.221v2.284a1.222 1.222 0 0 1-2.443 0v-2.283a1.22 1.22 0 0 1 1.221-1.222m3.999 2.256a1.04 1.04 0 0 1 1.042 1.042v1.534a1.042 1.042 0 1 1-2.084 0v-1.534a1.04 1.04 0 0 1 1.042-1.042m3.803 1.36a.84.84 0 0 1 .838.838v1.274a.838.838 0 0 1-1.676 0v-1.274a.84.84 0 0 1 .838-.838"></svg:path><svg:circle cx="9.015" cy="25.963" r="2.353" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="19.081" cy="25.963" r="2.353" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.148 13.265a3.176 3.176 0 1 1 0 6.352m-7.33-6.352a3.176 3.176 0 1 0 0 6.352h7.33m0-6.352h-7.33"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M42.412 35.896a.985.985 0 0 1 1.088 1.088c0 1.198-.46 1.06-.46 1.06h-1.18c-12.598 0-18.042 2.794-18.042 2.794H4.5v-2.227h2.021v-2.42h5.438v2.321h7.976v-2.617Z"></svg:path>`,
})
export class ArcticonsIxigoTrainsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIyoxWormholeIcon],svg[arcticons-iyox-wormhole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.553 12.558A16.44 16.44 0 0 1 26.056 5.5c9.082 0 16.444 7.362 16.444 16.444h0c0 5.385-2.636 10.43-7.058 13.503"></svg:path><svg:circle cx="21.944" cy="26.056" r="16.444" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.944" cy="26.056" r="12.333" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.944" cy="26.056" r="8.222" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsIyoxWormholeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIyzicoIcon],svg[arcticons-iyzico-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.8 25.056v3.127a2.323 2.323 0 0 1-2.318 2.317c-.695 0-1.274-.232-1.621-.695"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.8 21.117v3.823c0 1.274-1.043 2.317-2.318 2.317s-2.316-1.043-2.316-2.317v-3.823m24.689 5.992a2.27 2.27 0 0 1-2.261-2.261v-1.47a2.27 2.27 0 0 1 2.26-2.26h0a2.27 2.27 0 0 1 2.262 2.26v1.47a2.27 2.27 0 0 1-2.261 2.26m-17.788-5.991h4.438l-4.438 5.992h4.438"></svg:path><svg:circle cx="9.732" cy="18.348" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.732 21.117v5.992m22.772-1.131c-.339.679-1.13 1.13-1.921 1.13h0a2.27 2.27 0 0 1-2.261-2.26v-1.47a2.27 2.27 0 0 1 2.26-2.26h0c.792 0 1.583.452 1.922 1.13"></svg:path><svg:circle cx="25.943" cy="18.348" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.943 21.117v5.992"></svg:path>`,
})
export class ArcticonsIyzicoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIziIcon],svg[arcticons-izi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.399" cy="16.399" r="10.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsIziIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIzlyIcon],svg[arcticons-izly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.721 25.503v4.642a3.44 3.44 0 0 1-3.438 3.439h0c-.95 0-1.81-.385-2.432-1.008"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.721 19.829v5.673c0 1.9-1.54 3.44-3.438 3.44h0a3.44 3.44 0 0 1-3.44-3.44v-5.674m-15.765 0h6.877l-6.877 9.113h6.877"></svg:path><svg:circle cx="11.478" cy="15.616" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.478 19.828v9.113m14.107-13.755v12.036c0 .95.77 1.72 1.72 1.72h.516m.024-14.115a2.52 2.52 0 0 0-2.269-2.281l-.006.006m4.595 2.126a4.95 4.95 0 0 0-4.456-4.455m6.821 4.23a7.32 7.32 0 0 0-6.603-6.603"></svg:path>`,
})
export class ArcticonsIzlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIzomeParentIcon],svg[arcticons-izome-parent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.57 32.5H37.5a5 5 0 0 1 0 10H20.618"></svg:path><svg:circle cx="10.5" cy="10.5" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 10.5V24a5 5 0 0 1-10 0v-1.429M5.5 37.5V24a5 5 0 0 1 10 0v1.43m9.93-9.929H24a5 5 0 0 1 0-10h3.383"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.74 11.191a3.333 3.333 0 0 0-2.358-5.69H37.5a5 5 0 0 1 3.536 8.535L18.26 36.81a3.333 3.333 0 0 0 2.357 5.69H10.5a5 5 0 0 1-3.536-8.535z"></svg:path>`,
})
export class ArcticonsIzomeParentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsIzzyondroidIcon],svg[arcticons-izzyondroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.145 6.048L20.973 17.54l13.66.022M17.196 23.38L5.607 41.723"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.634 17.562a12.6 12.6 0 0 1-5.01 24.161H5.608m7.205-11.514a12.6 12.6 0 0 1 5.01-24.161H41.84L31.578 22.292m-4.855 7.684l-7.421 11.747"></svg:path><svg:path fill="currentColor" d="M21.57 24.315a.75.75 0 1 1-.75.75a.75.75 0 0 1 .75-.75m5.247 0a.752.752 0 1 1-.004 0Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.309 20.519l-1.889 1.829m-8.64-1.83l1.893 1.825m9.544 5.174a6.173 6.173 0 0 0-12.345 0Z"></svg:path>`,
})
export class ArcticonsIzzyondroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJAndTExpressIcon],svg[arcticons-j-and-t-express-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.829 18.163l-3.147 11.959H4.5m28.442 0l2.848-11.959m-6.572 0H43.5m-16.269 5.695c-5.125 10.25-15.375 3.416-6.264-1.14"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.231 30.122l-7.414-9.681q-2.266-3.417 5.706-2.278"></svg:path>`,
})
export class ArcticonsJAndTExpressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJ2meloaderIcon],svg[arcticons-j2meloader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.45 9.5v19.111h9.56M12.99 9.5h9.56v14.336a4.833 4.833 0 0 1-4.785 4.775h0a4.775 4.775 0 0 1-4.775-4.775h0V22.25m16.907 16.231h3.489m-3.489-6.97h3.489m-3.489 3.49h2.271m-2.271-3.49v6.97m-8.865.009v-6.96l3.48 6.97l3.49-6.96v6.96m-13.388-4.66a2.31 2.31 0 0 1 4.62 0a2.17 2.17 0 0 1-.676 1.634c-.967.822-3.944 3.026-3.944 3.026h4.62"></svg:path>`,
})
export class ArcticonsJ2meloaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJaAudiobookIcon],svg[arcticons-ja-audiobook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.412 21.445c1.544 1.413 4.219 1.999 6.261 2.91l2.632 1.835v.758c4.959 4.264 6 9.789-.2 13.04"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.305 26.19c-5.36-.204-9.904 1.152-13.99 3.39c-4.513-1.643-8.717-4.075-14.125-3.43l.798 4.267c5.66-.398 4.975 6.446 2.034 7.178l.917 3.35c3.896-.383 7.382.16 10.376 1.555c3.339-1.096 6.784-1.429 10.76-1.356l.518-3.43c-5.825-2.428-1.82-8.811 1.635-6.998l1.077-3.769m-7.577-6.818c-.294-2.837.218-5.372.758-7.896c-.905-3.475-9.495-7.823-14.676-.04c.693 2.514.887 5.17.838 7.896c2.766 3.16 8.69 4.23 13.08.04"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.728 20.129c2.842.712 3.913-7.935.758-7.896m-14.676-.04c-3.58.084-3.06 9.176.838 7.896"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.744 12.883c.552-10.146-17.966-9.506-17.286-.094m21.77 17.927c2.474 2.21 1.766 5.705.878 9.272"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.593 37.715c2.32.791 3.086-.303 3.213-1.103M19.673 21.723c-.885 1.182-4.624.656-7.37 2.752L10.19 26.15c-7.747 8.242-4.234 12.656 0 13.638c-1.958-3.908-2.633-7.364.798-9.371"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.022 37.595c-1.885.273-3.06-.251-4.102-.924m3.384-12.196c7.231.2 10.891 2.219 12.011 5.105c1.294-3.287 4.626-4.325 11.358-5.224m-18.339-9.683c5.551-.557 9.703-.367 13.682-.086M18.048 10.62c3.8-.651 7.95-.664 12.388-.146"></svg:path><svg:circle cx="24.402" cy="12.247" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.315 29.58V42.5"></svg:path>`,
})
export class ArcticonsJaAudiobookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJaMobilIcon],svg[arcticons-ja-mobil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.314 17.708l1.044 5.908a1.99 1.99 0 0 1-1.602 2.315h0a1.97 1.97 0 0 1-1.482-.333"></svg:path><svg:circle cx="9.896" cy="15.344" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.856 19.902a2 2 0 0 1-1.62 2.318h0a2 2 0 0 1-2.319-1.621l-.226-1.28A2 2 0 0 1 14.312 17h0a2 2 0 0 1 2.318 1.621m.575 3.251l-.923-5.22"></svg:path><svg:circle cx="19.418" cy="21.251" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.025 13.373l1.036 5.859"></svg:path><svg:rect width="4" height="5.3" x="18.066" y="29.327" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.274 31.327a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.3m-4-5.3v5.3m4-3.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.3"></svg:path><svg:circle cx="29.753" cy="26.877" r=".7" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.753 29.327v5.3m1.851-8v7a1 1 0 0 0 1 1h.3m-9.006-3.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1.3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2m0 2v-8m10.613 0a2.907 2.907 0 0 0-2.907-2.908m5.43 2.908c0-3-2.431-5.431-5.43-5.431"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.726 26.627a8.12 8.12 0 0 0-8.122-8.123"></svg:path>`,
})
export class ArcticonsJaMobilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJadaIcon],svg[arcticons-jada-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.009 31.602a11.99 11.99 0 0 0 23.981 0V4.5H24.326v27.026"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.991 4.5l-11.664 7.573L35.99 18.13l-11.663 6.8l11.663 6.84l-11.663-.246l8.208 8.434m-8.209-8.434l-8.52 8.764"></svg:path>`,
})
export class ArcticonsJadaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJagoIcon],svg[arcticons-jago-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.708 20.16l.023 9.415a4.245 4.245 0 0 1-3.997 4.47c-8.177.717-3.788-9.163-10.808-8.95c-4.558.475-5.11 5.342-3.448 9.268c5.452 14.443 27.147 10.675 27.251-3.681c.077-1.048.063-10.325.063-10.325c-.145-5.15-8.907-5.25-9.084-.197"></svg:path><svg:circle cx="14.073" cy="9.458" r="4.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.998" cy="9.458" r="4.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.927" cy="9.458" r="4.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsJagoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJagranIcon],svg[arcticons-jagran-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.303 26.19c1.21 2.415 1.95 4.857 2.1 7.705H4.597c.227-10.968 9.189-19.79 20.21-19.79c7.916 0 14.769 4.55 18.087 11.176l-9.62 4.792"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.642 33.807c.204-9.862 8.262-17.68 18.172-17.68c4.554 0 8.716 1.675 11.906 4.441l-5.767 6.565"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.076 33.729a13 13 0 0 1-.018-.684c0-7.035 5.703-12.738 12.738-12.738c1.327 0 2.606.203 3.808.579l-1.167 3.992"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.754 33.73a9.05 9.05 0 0 1 18.1 0"></svg:path>`,
})
export class ArcticonsJagranIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJagranGujaratiIcon],svg[arcticons-jagran-gujarati-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.303 20.387c1.08 2.158 1.786 4.337 2.032 6.808m-10.287.897H4.598c.226-10.968 9.188-19.79 20.21-19.79c7.915 0 14.768 4.55 18.086 11.176l-9.62 4.792"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.642 28.005c.204-9.862 8.262-17.68 18.172-17.68c4.554 0 8.716 1.674 11.906 4.44l-5.767 6.566"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.076 27.926a13 13 0 0 1-.018-.684c0-7.035 5.703-12.738 12.738-12.738c1.327 0 2.606.203 3.808.58l-1.167 3.992"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.754 27.927a9.05 9.05 0 0 1 18.078-.63"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 32.697a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.2 31.397c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7v2.7c0 1.5 1.2 2.6 2.7 2.6s2.7-1.2 2.7-2.6h-2.7"></svg:path>`,
})
export class ArcticonsJagranGujaratiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJagranPodcastIcon],svg[arcticons-jagran-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.303 20.387c1.08 2.158 1.786 4.337 2.032 6.808m-10.287.897H4.598c.226-10.968 9.188-19.79 20.21-19.79c7.915 0 14.768 4.55 18.086 11.176l-9.62 4.792"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.642 28.005c.204-9.862 8.262-17.68 18.172-17.68c4.554 0 8.716 1.674 11.906 4.44l-5.767 6.566"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.076 27.926a13 13 0 0 1-.018-.684c0-7.035 5.703-12.738 12.738-12.738c1.327 0 2.606.203 3.808.58l-1.167 3.992"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.754 27.927a9.05 9.05 0 0 1 18.078-.63"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 32.697a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.25 36.897v-8h2.6c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7h-2.6"></svg:path>`,
})
export class ArcticonsJagranPodcastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJagranSarkariNaukriIcon],svg[arcticons-jagran-sarkari-naukri-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.303 20.387c1.08 2.158 1.786 4.337 2.032 6.808m-10.287.897H4.598c.226-10.968 9.188-19.79 20.21-19.79c7.915 0 14.768 4.55 18.086 11.176l-9.62 4.792"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.642 28.005c.204-9.862 8.262-17.68 18.172-17.68c4.554 0 8.716 1.674 11.906 4.44l-5.767 6.566"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.076 27.926a13 13 0 0 1-.018-.684c0-7.035 5.703-12.738 12.738-12.738c1.327 0 2.606.203 3.808.58l-1.167 3.992"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.754 27.927a9.05 9.05 0 0 1 18.078-.63"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 32.697a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.95 35.797c.5.6 1.1.9 2 .9h1.2c1.1 0 2-.9 2-2s-.9-2-2-2h-1.3c-1.1 0-2-.9-2-2s.9-2 2-2h1.2c.9 0 1.5.2 2 .9"></svg:path>`,
})
export class ArcticonsJagranSarkariNaukriIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJagranTvIcon],svg[arcticons-jagran-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.303 20.387c1.08 2.158 1.786 4.337 2.032 6.808m-10.287.897H4.598c.226-10.968 9.188-19.79 20.21-19.79c7.915 0 14.768 4.55 18.086 11.176l-9.62 4.792"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.642 28.005c.204-9.862 8.262-17.68 18.172-17.68c4.554 0 8.716 1.674 11.906 4.44l-5.767 6.566"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.076 27.926a13 13 0 0 1-.018-.684c0-7.035 5.703-12.738 12.738-12.738c1.327 0 2.606.203 3.808.58l-1.167 3.992"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.754 27.927a9.05 9.05 0 0 1 18.078-.63"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 32.697a7 7 0 1 1-14 0a7 7 0 0 1 14 0m-9.6-4h5.2m-2.6 8v-8"></svg:path>`,
})
export class ArcticonsJagranTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJainGranthIcon],svg[arcticons-jain-granth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.7 4.5h-2.3c-1.1 0-2 .9-2 2v35c0 1.1.9 2 2 2h2.3m0-39v39h24.9c1.1 0 2-.9 2-2v-35c0-1.1-.9-2-2-2zm3.948 10h19m-1.77 0v8.655m-7.73-8.655v8.816"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.464 19.732l-1.598-2.374h5.012m-10.89-8.011l3.16 5.153l-5.253-3.321m.723 6.113h4.531m4.315 2.44l.018-2.374m-8.864-.066c.657 1.082 1.314 2.164 1.137 3.06c-.176.896-1.185 1.606-2.139 1.387c-.954-.218-1.851-1.364-2.316-2.257c-.465-.894-.496-1.534-.528-2.175m-1.071 11.235h10.53m-4.625 0v7.464m0-3.242l-3.612 3.23m.423-7.452v4.498l-1.771-1.772m.001 0l1.772-.029m13.373-2.683H35.6m-1.401 0v7.357m-4.851-5.235c-.452-.302-.904-.603-.787-1.102s.803-1.194 1.557-1.261s1.576.494 1.693 1.286s-.469 1.814-1.231 2.33s-1.7.523-1.722 1.063c-.02.54.876 1.613 1.92 1.575s2.236-1.186 3.428-2.334"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.378 30.71v2.38l-1.734-2.362l4.699-.05"></svg:path>`,
})
export class ArcticonsJainGranthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJakdojadeIcon],svg[arcticons-jakdojade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.04" cy="24.35" r="4.54" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:circle cx="37.6" cy="12.39" r="5.9" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:circle cx="19.19" cy="37.99" r="3.52" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M16.29 36a24.4 24.4 0 0 1-5.6-7.41m22.57-12.22A77.8 77.8 0 0 0 20.58 34.7"></svg:path><svg:circle cx="9.04" cy="24.35" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.19" cy="37.99" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.6" cy="12.39" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsJakdojadeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJamendoIcon],svg[arcticons-jamendo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M24 2a22 22 0 1 0 22 22A22 22 0 0 0 24 2Zm0 35.91A13.72 13.72 0 0 1 10.47 24A13.72 13.72 0 0 1 24 10.09A13.72 13.72 0 0 1 37.53 24A13.72 13.72 0 0 1 24 37.91Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M31.63 24.9L21.05 32a1 1 0 0 1-1.4-.2a1 1 0 0 1-.2-.65V16.82a1 1 0 0 1 1-1a1 1 0 0 1 .64.21l10.58 7.2a1 1 0 0 1 .33 1.35a1.1 1.1 0 0 1-.37.32Z"></svg:path>`,
})
export class ArcticonsJamendoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJamesdspIcon],svg[arcticons-jamesdsp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8.14" cy="16.11" r="3.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="39.86" cy="16.11" r="3.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.14 12.47V8.4m0 11.35V39.6m31.72-27.13V8.4m0 11.35V39.6"></svg:path><svg:circle cx="24" cy="31.89" r="3.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 35.53v4.07m0-11.35V8.4"></svg:path>`,
})
export class ArcticonsJamesdspIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapanAirlinesIcon],svg[arcticons-japan-airlines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.114 30.457s-.052-.335-.135-.685c-.167-.705-.327-1.582-.327-1.797l-.055-.478a8.4 8.4 0 0 1-.034-1.296c-.008-.716.181-1.413.33-2.099c.372-1.237 1.005-2.386 2.002-3.632c.817-1.021 1.713-1.96 2.385-2.498c.16-.128.814-.588 1.452-1.02c1.89-1.283 2.849-2 3.567-2.665c.436-.404.517-.502.632-.757c.068-.151.094-.295.096-.53c.002-.279-.014-.35-.119-.528a1.2 1.2 0 0 0-.691-.527c-.295-.088-1.254-.136-3.871-.192l-6.553-.135h0c-.555-.02-1.058-.053-1.117-.072c-.084-.028.05-.066.601-.171l7.13-1.193c.409-.08.803-.177.878-.213s.309-.221.522-.411c.526-.471.845-.694 1.382-.967c.875-.445 1.762-.649 2.632-.606c.62.031 1.067.143 1.59.401c.745.367 1.334 1.073 1.596 1.916c.09.292.042.388.071.416l.43.418c.383.421.527.656.527.86c-.045.257-.34.652-.34.652c-.022.04-.182.212-.355.383l-.314.31l-.941 1.023l-.26.268l-.114.12s-.734.76-1.715 1.751c-2.097 2.12-2.566 2.628-3.225 3.5c-1.034 1.367-1.434 2.623-1.433 4.49c0 1.534.275 2.44.956 3.166c.507.54 1.17.897 2.09 1.127c.631.158 1.078.207 1.849.206c1.21-.001 2.144-.162 2.772-.476m-14.307-.162A13.5 13.5 0 0 1 10.5 17c0-7.456 6.044-13.5 13.5-13.5S37.5 9.544 37.5 17h0a13.5 13.5 0 0 1-6.484 11.533M9.203 25.104c-.023.023-.807-1.117-1.089-1.585c-.587-.972-1.288-2.487-1.644-3.552c-.51-1.526-.88-3.693-1.094-5.65l-.081-.743M7.39 31.88c-1.23-.427-2.51-1.281-3.408-1.907c-.41-.287-.768-.5-.768-.5m-.49-7.499l1.512 2.287c.6.91 1.329 1.875 1.977 2.639c.96 1.134 1.596 1.671 1.596 1.671m30.987-3.469c.023.024.806-1.116 1.089-1.584c.587-.973 1.288-2.487 1.643-3.552c.51-1.526.881-3.694 1.095-5.65l.081-.744M40.61 31.881c1.23-.427 2.51-1.282 3.408-1.908c.41-.287.768-.5.768-.5m.49-7.498l-1.513 2.286a29 29 0 0 1-1.976 2.64c-.96 1.133-1.596 1.67-1.596 1.67M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.416 33.5v8h4m-10.32-2.7h3.5m.9 2.7l-2.6-8l-2.7 8m-1.612-8v6c0 1.1-.9 2-2 2h0c-1.1 0-2-.9-2-2v-.7"></svg:path>`,
})
export class ArcticonsJapanAirlinesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapanDigitalAuthenticationAppIcon],svg[arcticons-japan-digital-authentication-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 3.5c1.616 0 5.019 4.162 6.511 4.78c1.493.618 6.842.082 7.985 1.224c1.142 1.143.606 6.492 1.224 7.985S44.5 22.385 44.5 24s-4.162 5.019-4.78 6.511c-.618 1.493-.082 6.842-1.224 7.985c-1.143 1.142-6.492.606-7.985 1.224S25.615 44.5 24 44.5s-5.019-4.162-6.511-4.78c-1.493-.618-6.842-.082-7.985-1.224c-1.142-1.143-.606-6.492-1.224-7.985S3.5 25.615 3.5 24s4.162-5.019 4.78-6.511c.618-1.493.082-6.842 1.224-7.985c1.143-1.142 6.492-.606 7.985-1.224S22.384 3.5 24 3.5"></svg:path><svg:circle cx="24" cy="18.061" r="2.861" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.954a3.337 3.337 0 0 0-3.337 3.337v4.966h6.674V28.29A3.337 3.337 0 0 0 24 24.953"></svg:path>`,
})
export class ArcticonsJapanDigitalAuthenticationAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapanPostIcon],svg[arcticons-japan-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 9.5h39v5.7h-39zm0 9.8V25h16.65v13.5h5.7V25H43.5v-5.7z"></svg:path>`,
})
export class ArcticonsJapanPostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapanPostBankFidoIcon],svg[arcticons-japan-post-bank-fido-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.79 19.938c-1.946 0-3.066 1.77-3.066 3.54c0 6.206-3.449 11.754-5.464 12.448"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.25 16.618a6.55 6.55 0 0 0-6.549 6.548c0 7.371-4.588 10.13-5.272 10.13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.795 13.204a10.074 10.074 0 0 0-11.62 9.955c0 3.94-2.05 7.387-3.43 7.287"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.77 10.393A13.6 13.6 0 0 0 5.65 23.53c0 2.526-1.15 3.409-1.15 3.409m23.47 8.972c0-3.43.154-2.167-3.714-6.273c-4.402-4.672-4.402-12.248 0-16.92s11.54-4.673 15.942 0s4.403 12.248 0 16.92c-3.867 4.106-3.717 2.883-3.717 6.274M32.228 19.11v4.457m5.345-5.884v1.81m-10.69-1.81v1.81"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.085 26.211c2.222 2.14 7.252 1.326 8.286 0m-17.483-1.324c0 5.254-3.593 12.028-5.429 12.835"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.493 31.709c1.56 2.737 5.098 6.24 6.35 6.503m-2.868-7.449c1.119 1.89 3.45 4.243 4.105 4.545m-8.064 3.43s.584-.322.918-1.045a4.3 4.3 0 0 0 1.22 1.094"></svg:path>`,
})
export class ArcticonsJapanPostBankFidoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapanPostBankPassbookIcon],svg[arcticons-japan-post-bank-passbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.057 12.675H40.76c-.912 0-1.41.892-1.56 2l-2.526 18.642c-.15 1.108-1.163 2-2.27 2H5.99c-1.108 0-1.88-.892-1.729-2l2.525-18.642c.15-1.108 1.163-2 2.271-2"></svg:path><svg:circle cx="25.871" cy="23.544" r="3.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.591" cy="29.555" r="1.813" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.276" cy="29.555" r="1.813" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.871 27.155v4.334c0 2.062-1.587 3.837-2.303 3.837M10.185 14.287h26.063c.554 0 .855.437.788 1l-.125 1.055c-.067.563-.658 1-1.212 1H9.636c-.554 0-.872-.443-.788-1l.125-1.055c.08-.583.658-1 1.212-1m30.574-1.613c1.562 0 1.796 3.07 1.796 3.07L43.753 30.2c.084 1.334-1.327 2.718-2.906 2.718h-3.9"></svg:path>`,
})
export class ArcticonsJapanPostBankPassbookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapanPostBankYuchorecoIcon],svg[arcticons-japan-post-bank-yuchoreco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 14.2c-10.462 0-18.94 8.22-19.498 18.54a1.005 1.005 0 0 0 1.003 1.06h7.642c.519 0 .952-.393 1.002-.909c.487-5.11 4.632-9.142 9.851-9.142s9.364 4.032 9.851 9.142c.05.516.483.91 1.002.91h7.642a1.005 1.005 0 0 0 1.004-1.06C42.939 22.418 34.463 14.2 24 14.2m6.318 11.782l6-7.428m-3.612 10.22l8.271-4.776M24 23.749V14.2"></svg:path>`,
})
export class ArcticonsJapanPostBankYuchorecoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapanTransitIcon],svg[arcticons-japan-transit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.033 12.611V32.58c0 .768-.62 1.387-1.39 1.387H11.357c-.77 0-1.39-.619-1.39-1.387V12.61S11.818 7.608 24 7.608s14.033 5.003 14.033 5.003M9.966 26.505h28.067"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M40.3 11.008V38.32c0 .892-.72 1.61-1.614 1.61H9.314a1.61 1.61 0 0 1-1.615-1.61V11.008S9.85 5.2 24 5.2s16.3 5.808 16.3 5.808M18.46 4.5h11.08"></svg:path><svg:path d="M38.488 39.93v2.012c0 .863-.697 1.558-1.562 1.558H11.075a1.557 1.557 0 0 1-1.563-1.558V39.93"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.095 35.75h6.112v2.417h-6.112zm21.698 0h6.112v2.417h-6.112z"></svg:path>`,
})
export class ArcticonsJapanTransitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapaneseLinduoHdIcon],svg[arcticons-japanese-linduo-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.835 21.71c.646.455-1.288 1.963-1.766-.077c.607-.394 1.238-.231 1.766.078"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.668 11.856c-.462-.423-4.684-3.506-9.505-2.976c-7.367.964-12.59 8.513-8.73 16.708"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.504 9.276c-.105-1.043 1.193-2.18-1.127-3.073c-3.293-1.454-2.662 1.237-3.214 2.677"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.772 7.64c2.373-1.785 4.04 1.483 2.411 2.667"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.827 8.845c.649-.137 1.337-.296 1.953-.133m1.554-2.982c-.713.411-1.447.804-1.479 1.8l.025 8.653c.692-.298.825-.811 2.289-.813h5.958c.84 0 .908-.7 1.074-1.043"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.123 11.106a2.3 2.3 0 1 1-2.601-2.96m-4.5-1.306c-2.095-1.26-4.19-.993-6.285-.483m-5.299-2.326l2.448 2.184m-5.917.403l5.453 1.113m12.484 7.957c2.476 7.194.308 16.794-6.603 16.64m7.06-15.078l1.965 2.672m-23.895 5.666c-.23-4.108.55-7.98 4.38-11.135c-1.302 5.262.805 6.226 3.035 8.064c-.269-1.654-.23-3.425.962-5.635c1.012 1.844 2.014 3.974 3.082 4.298c-.692-1.843-.02-3.095.31-4.497c.424 2.82.883 5.103 1.425 6.132"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.303 32.328c-2.286-.255-.514-3.052 1.54-3.687c2.667-1.013 2.287-2.98 2.325-4.297c-2.103 3.96-6.295 5.14-9.605 8.703m4.064-10.232c-.452 3.62-4.492 6.55-4.064 10.232"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.433 25.588c.875 2.434 1.128 5.126 4.286 6.615c1.24.429 3.397 0 4.91-.696m9.036-12.36c.854-2.281 2.207-.815 2.022.354c.966-.093 1.97 1.667-.022 2.198c.044 2.381-1.993 1.524-2.077.376c-.894 1.203-2.659.212-1.315-1.414c-1.046-1.633.308-2.59 1.392-1.514M19.719 32.203c-3.77 2.497-7.486 5.027-6.88 10.173m18.446-9.783v1.238c4.327-.375 6.099 4.648 6.353 6.79"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.93 35.96l.003-5.335H8.781v8.606M7.5 32.891h8.747m-7.466-2.266H6.687v-1.437l-1.843-.198l1.406-1.677c3.217 1.755 6.476 1.023 9.853.618m-1.17 2.694h2.585m9.061-7.422c.646.454-1.455 2.516-1.766-.078c.557-.193 1.126-.305 1.766.078m-7.054 4.875c.39.343 1.9.617 2.684.243m.929 3.724c.106 1.7 1.088 2.692 1.768 3.908c1.896-1.249 3.819-2.41 5.88-3.123"></svg:path>`,
})
export class ArcticonsJapaneseLinduoHdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapaneseTvIcon],svg[arcticons-japanese-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="23.582" x="4.5" y="16.185" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.162" ry="5.162"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.226 16.185l3.023-5.996"></svg:path><svg:circle cx="29.728" cy="9.234" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.774 16.185l-3.023-5.996"></svg:path><svg:circle cx="18.272" cy="9.234" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.524 24.162h6.306m-7.651 3.14h8.996m-4.498 0c0 3.014-.296 4.017-2.357 5.52m10.739-8.66v8.313c2.41 0 6.112-1.976 7.247-4.156m3.547-4.157V31.2c0 .87.477 1.388 3.519 1.388c1.822 0 3.168-.336 3.168-.336"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.853 25.998c-2.776 1.164-6 1.837-6 1.837m5.96-4.244l.641 1.051m.726-1.602l.641 1.051"></svg:path>`,
})
export class ArcticonsJapaneseTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapaneseVaccinationCertificateIcon],svg[arcticons-japanese-vaccination-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.728 30.031h8.903v8.903h-8.903z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.125 32.428h4.109v4.109h-4.109zm9.245-14.039h8.903v8.903H25.37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.767 20.786h4.109v4.109h-4.109z"></svg:path><svg:rect width="13.457" height="6.084" x="17.453" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.064"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.431 7.643h-5.52V43.5h30.177V7.643H33.81v2.659c0 2.179-1.108 3.223-2.7 3.223H17.253c-1.685 0-2.82-.667-2.82-2.82Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.728 18.389h8.903v8.903h-8.903z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.125 20.786h4.109v4.109h-4.109zm9.245 15.317h2.968v2.968H25.37zm2.967-3.109h2.968v2.968h-2.968zm2.968 3.109h2.968v2.968h-2.968z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.37 30.168h2.968v2.968H25.37zm5.935 0h2.968v2.968h-2.968z"></svg:path>`,
})
export class ArcticonsJapaneseVaccinationCertificateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapesLuxIconIcon],svg[arcticons-japes-lux-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.612 5.5c6.565 0 11.888 5.323 11.888 11.888c0 6.576-5.323 11.9-11.888 11.9c-6.576 0-11.9-5.324-11.9-11.9c0-6.565 5.324-11.888 11.9-11.888"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.118 20.92q.334 1.755.382 4.405V42.5H25.325C13.425 42.5 5.5 34.575 5.5 22.675V5.5h17.175q2.555 0 4.595.418"></svg:path>`,
})
export class ArcticonsJapesLuxIconIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJasenseiIcon],svg[arcticons-jasensei-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.173 13.827v15.26a5.1 5.1 0 0 1-5.086 5.086h0A5.1 5.1 0 0 1 11 29.087v-1.78m26 6.866l-6.613-20.346l-6.867 20.346m2.289-6.867h8.902"></svg:path>`,
})
export class ArcticonsJasenseiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJawExercisesIcon],svg[arcticons-jaw-exercises-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.577 10.853c.403 1.581.964 2.99 2.325 3.514c1.462-.285 2.831-.091 4.092.657c1.48.702 2.785.198 4.081-.349c2.34.607 2.885.04 3.93-.2c.588.373 1.14.697 2.092.99c.88.27.527 1.318.62 2.072m-14.815-3.17a9.1 9.1 0 0 1-1.631 2.132c-.081.794-.283 1.239-.475 1.711c.124.633.035 1.18.316 1.871c.334 1.818-1.307 2.28-.025 6.335c-.546-2.338-2.223-4.374-1.758-7.33l-1.248-.091c1.079-1.298.342-3.134.116-4.873c-.215-1.66.29-2.976 2.38-3.269c-1.058-2.442 2.182-6.02 7.73-5.693c1.17-.592 2.448-1.076 3.824-.113c1.88-.102 2.436-.01 3.696 1.078s1.865.462 2.674.447c.449.908.166 1.697-.037 2.017c.912.814 2.25.82 2.392 3.3c.08 1.353.405 2.292 1.063 3.02c-.49.076-.95.23-1.567-.034c.043 1.587.334 3.138-.28 4.817c.025 1.298.064 2.6-.634 3.702l-1.249 2.564c.61-1.314.744-2.698.124-4.06c-.45-.986-.285-1.544-.076-2.18c.337-1.03-.169-1.537-.52-2.182m-.798 17.24a4.4 4.4 0 0 1-.867.793c-.174.158-.369.324-.57.495m0 0c-.805.686-1.72 1.434-1.917 1.88c-.669 1.508-1.902 1.35-2.699 1.396h-2.772c-.796-.045-2.029.112-2.696-1.395c-.198-.447-1.113-1.195-1.92-1.88m15.13-11.18s.145.548.123 1.102c-.048 1.167-.959 3.348-.959 3.348l-1.938 3.03l-.351 3.7m2.251-5.88l-.132 2.842a2.92 2.92 0 0 1-.685 1.748l.172 4.78c.057 1.573 1.293 2.825 3.13 3.945m-2.446-14.166l-.039.85c.548-.286 1.177-.364 1.434-1.412c1.099-1.609.655-2.285.76-3.366c.054-.567-.031-1.14-.02-1.708c.007-.332-.031-.272-.498-.339M16.04 34.773q.38.456.867.795c.174.158.37.324.57.495M14.44 24.427s-.236 1.007-.214 1.559c.049 1.167.96 3.348.96 3.348l1.938 3.03l.35 3.7m-2.25-5.88l.13 2.842a2.92 2.92 0 0 0 .686 1.748l-.172 4.78c-.056 1.575-1.292 2.826-3.128 3.946m2.445-14.166l.04.851c-.549-.287-1.178-.365-1.434-1.412c-1.1-1.61-.656-2.286-.76-3.367c-.055-.567.03-1.14.019-1.708c-.006-.331.346-.458.814-.524"></svg:path>`,
})
export class ArcticonsJawExercisesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJazzcashIcon],svg[arcticons-jazzcash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.331 15.73l4.923 12.34a4.424 4.424 0 0 1-2.463 5.752h-.001h0a4.424 4.424 0 0 1-5.745-2.476h0L4.5 29.98m18.913-12.464l7.184-2.866l-3.387 12.385l7.184-2.866m-1.875-12.308l7.184-2.866l-3.387 12.384l7.184-2.866m-20.631 5.68a3.867 3.867 0 0 1-2.159 5.025h0a3.867 3.867 0 0 1-5.025-2.16v0l-.931-2.334a3.867 3.867 0 0 1 2.159-5.025h0a3.867 3.867 0 0 1 5.025 2.16h0m2.363 5.926l-3.797-9.518m14.741 7.914l2.82 7.486m-1.163-3.087a2 2 0 0 1 1.166-2.577h0a2 2 0 0 1 2.577 1.167l1.163 3.088m-8.806 2.838a2.25 2.25 0 0 0 1.697-.16l.42-.159a1.324 1.324 0 0 0 .77-1.706h0a1.324 1.324 0 0 0-1.705-.774l-.84.316a1.324 1.324 0 0 1-1.704-.774h0a1.324 1.324 0 0 1 .77-1.706l.42-.158a2.25 2.25 0 0 1 1.697-.161m-9.023 7.507a2 2 0 0 1-1.27 1.555h0a2 2 0 0 1-2.576-1.167l-.458-1.216a2 2 0 0 1 1.166-2.577h0a2 2 0 0 1 1.978.328m6.141.141a2 2 0 0 1-1.167 2.576h0a2 2 0 0 1-2.576-1.166l-.458-1.217A2 2 0 0 1 27.45 32h0a2 2 0 0 1 2.576 1.167m1.164 3.089l-1.868-4.959"></svg:path>`,
})
export class ArcticonsJazzcashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJazzworldIcon],svg[arcticons-jazzworld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.331 15.688l4.923 12.34a4.424 4.424 0 0 1-2.464 5.751h0a4.424 4.424 0 0 1-5.745-2.476L4.5 29.937m18.913-12.464l7.184-2.866l-3.387 12.385l7.184-2.866m-1.875-12.308l7.184-2.866l-3.387 12.384L43.5 18.47m-20.631 5.68a3.867 3.867 0 0 1-2.16 5.025h0a3.867 3.867 0 0 1-5.024-2.16l-.932-2.334a3.867 3.867 0 0 1 2.16-5.025h0a3.867 3.867 0 0 1 5.024 2.16m2.364 5.926l-3.797-9.518m4.674 14.944l.324 5.169l-3.201-4.072l.323 5.169l-3.2-4.072"></svg:path><svg:rect width="3.732" height="4.945" x="27.264" y="31.835" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.866" transform="rotate(-20.871 29.13 34.307)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.395 32.414a1.866 1.866 0 0 1 1.078-2.409h0m-1.743.665l1.762 4.621m.738-8.271l2.327 6.103a.933.933 0 0 0 1.204.54l.262-.1m3.588-4.663a1.866 1.866 0 0 0-2.408-1.08h0a1.866 1.866 0 0 0-1.079 2.409l.432 1.133a1.866 1.866 0 0 0 2.409 1.08h0a1.866 1.866 0 0 0 1.079-2.41m.664 1.744l-2.659-6.974"></svg:path>`,
})
export class ArcticonsJazzworldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJblPortableIcon],svg[arcticons-jbl-portable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.946 5.152l-7.942 7.943m3.637-9.639l-9.638 9.639m4.343-10.343L3.463 24.634M18.37 3.727L4.494 17.602M38.559 7.54l-5.695 5.694m8.7-2.7l-5.423 5.424m7.821-1.822l-7.886 7.886m9.596-3.595l-6.083 6.084m5.885 6.115l-14.08 14.08m15.058-21.06L24.464 45.634m5.599-11.598L19.194 44.905m4.597-10.598l-8.888 8.889m4.012-10.014l-7.614 7.614m1.814-7.813l-4.809 4.809m1.987-7.925l-4.374 4.311m5.339-11.337l-7.034 7.033M24.914 24a2.525 2.525 0 0 1 .003 5.05H20.75v-10.1h4.166a2.525 2.525 0 0 1 0 5.05zm0 0h-4.165m-2.571-5.05v7.575a2.53 2.53 0 0 1-2.525 2.525h0a2.53 2.53 0 0 1-2.525-2.525v-.884m16.694-6.691v10.099h5.05"></svg:path>`,
})
export class ArcticonsJblPortableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJblheadphonesIcon],svg[arcticons-jblheadphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.525 30.123a18.497 18.497 0 1 1 34.949.004"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.231 40.467A8.333 8.333 0 0 1 8.434 27.772Zm9.538 0a8.333 8.333 0 1 0 10.797-12.695Zm-3.663-19.831a2.525 2.525 0 1 1 0 5.05H20.94v-10.1h4.166a2.525 2.525 0 1 1 0 5.05m-.001 0H20.94m-2.57-5.05v7.575a2.53 2.53 0 0 1-2.526 2.525h0a2.53 2.53 0 0 1-2.525-2.525v-.884m16.694-6.691v10.1h5.05"></svg:path>`,
})
export class ArcticonsJblheadphonesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJcrosswordsIcon],svg[arcticons-jcrosswords-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12.561" height="12.561" x="17.72" y="17.72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="12.561" height="12.561" x="17.72" y="5.159" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="12.561" height="12.561" x="17.72" y="30.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="12.561" height="12.561" x="30.28" y="17.72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="12.561" height="12.561" x="5.159" y="17.72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.704 20.606a27 27 0 0 0-.16 6.788a17 17 0 0 0 1.116-1.753m1.466-3.888a22.5 22.5 0 0 1 3.347 0a16 16 0 0 1-1.147 1.275m-2.263 3.282a2.75 2.75 0 0 0 3.283 0m6.666-5.521c-1.083 6.113-.16 6.374-.16 6.374a12 12 0 0 0 1.02-1.307m1.308-4.749a20.6 20.6 0 0 1 3.73-.032m-3.412 1.849a12 12 0 0 0 3.347-.064"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.251 21.012l.35 4.366s.065 1.148-.51 1.53s-1.433.478-1.688-.16a1.156 1.156 0 0 1 .414-1.401a1.98 1.98 0 0 1 1.275-.032a16 16 0 0 1 2.422 1.083m8.856-5.936c-1.045 2.495-1.962 4.733-2.932 7.076a7.1 7.1 0 0 1 1.115-2.263a1.54 1.54 0 0 1 1.562-.383c.636.229.956 1.403 1.211 1.626s.191.382.733.414a1.8 1.8 0 0 0 .893-.16c.095-.105.56-.453.733-.636"></svg:path>`,
})
export class ArcticonsJcrosswordsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJdComIcon],svg[arcticons-jd-com-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.622 22.185c0 .621 1.354 1.155 3.05 1.155c1.607 0 2.983-.378 2.983-1.199c0-1.312-6.033-1.358-6.033.044m-4.762-3.576c.858.257-.453 2.867-1.297 2.641c-1.069-.287.162-2.98 1.297-2.641m14.609 2.531c.319-.183-1.331-2.806-1.812-2.469c-.142.099 1.599 2.591 1.813 2.469zM18 24.25c1.125 3.094 5.469 4.563 8.344 4.563c3.281 0 6.473-1.418 7.188-4.562M17.287 35.072v1.836c4.322.467 7.909.287 10.069-.138v-1.542m-9.48 4.923c-.549.969-.665 1.592-.95 2.35m11.645-3.211c.394 1.299.619 2.259.84 3.211m2.298 0c-.508-2.04-1.061-2.968-1.436-3.454s-2.21-2.276-2.917-2.276M12.971 42.5c.365-1.742.994-2.626 1.536-3.355s1.845-1.978 2.873-2.265m13.905-20.354c1.099-.926 2.027-1.544 2.591-1.544s1.514.431 2.033 1.525s1.248 3.025 1.655 3.9s1.871 3.752 1.938 4.734c.094 1.391-1.422 2.625-2.469 2.938c-.946.282-1.603-.03-2.294-.164M5.5 27.533c.879-.536 1.82-1.446 2.725-2.83m.993-5.453c-3.155 7.689.99 16.591 14.204 16.591c7.728 0 12.036-6.436 12.036-11.893c0-5.507-4.774-9.586-12.699-9.586c-4.659 0-8.77 1.173-11.203 2.63c-1.679-.994-3.425-2.254-3.977-2.121s-1.44 1.503-2.079 2.475"></svg:path>`,
})
export class ArcticonsJdComIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJdFinanceIcon],svg[arcticons-jd-finance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M33.096 6.09c-1.111-.85-3.172-1.925-6.405-1.849c-12.086.285-22.402 5.895-22.675 9.598c-.47 6.359 9.602 10.316 20.185 11.385c-1.814 4.045-9.847 1.007-12.18 5.44c-.893 1.697 1.006 3.467-1.104 5.17c-1.83 1.476-1.24 1.975-.204 1.217c1.775-1.298 2.972-2.214 4.195-3.038c3.354-2.257 6.758-3.102 8.11-3.435c2.127-.525 3.924-1.989 5.795-2.1c1.329-.08 2.42-.274 2.515-.502l-4.933-.127c.272-.844.066-1.854-.202-2.886c5.572-4.872 10.968-11.841 8.649-16.775c1.65-.76.11 4.868 2.96 4.654c1.738-.13 5.123-4.046 1.775-5.546c-3.82-1.712-2.767-2.848-3.97-3.088c-1.357-.271-1.306 1.635-2.511 1.883Z"></svg:path><svg:path d="M26.51 26.592c1.272.124 1.915-.028 2.951.423m-19.746.004c.253 1.532 1.16 2.73 2.59 3.179"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.634 12.239c.59-.176 1.082-.2 1.57.332"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.425 12.137c-.599 5.224-5.23 9.012-11.651 10.593M25.62 6.436c.4.402.347.825-.117.943q0 0 0 0c-.464.119-1.164-.111-1.564-.513s-.348-.825.116-.943c.464-.119 1.165.111 1.564.513m-18.072 4.9c-1.28 1.133-1.58 2.19-.673 2.363h0c.908.172 2.68-.607 3.96-1.74c1.28-1.132 1.58-2.19.673-2.362c-.908-.172-2.68.607-3.96 1.74s0 0 0 0"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M44 36.819a7 7 0 0 1-7 7h0a7 7 0 1 1 7-7"></svg:path><svg:path d="m37 33.465l3.354 3.354L37 40.173l-3.354-3.354z"></svg:path></svg:g>`,
})
export class ArcticonsJdFinanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJdSportsIcon],svg[arcticons-jd-sports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.215 16.455v11.317c0 2.075-1.742 3.773-3.872 3.773h0c-2.13 0-3.873-1.698-3.873-3.773v-1.32m12.798 5.093v-15.09h3.485c3.679 0 6.777 3.018 6.777 6.602v1.886c0 3.584-3.098 6.602-6.777 6.602z"></svg:path>`,
})
export class ArcticonsJdSportsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJeepIcon],svg[arcticons-jeep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.582 18.576V24.7a2.04 2.04 0 0 1-2.041 2.041h0A2.04 2.04 0 0 1 11.5 24.7v-.678m10.787 1.653a2.04 2.04 0 0 1-1.774 1.03h0a2.04 2.04 0 0 1-2.04-2.041v-1.327a2.04 2.04 0 0 1 2.04-2.041h0c1.127 0 2.041.914 2.041 2.041V24h-4.082m13.946-2.74v8.164m0-4.796a2.04 2.04 0 0 0 2.041 2.04h0a2.04 2.04 0 0 0 2.041-2.04V23.3a2.04 2.04 0 0 0-2.041-2.041h0a2.04 2.04 0 0 0-2.041 2.041m-3.158 2.41a2.04 2.04 0 0 1-1.774 1.03h0a2.04 2.04 0 0 1-2.04-2.04v-1.327a2.04 2.04 0 0 1 2.04-2.041h0a2.04 2.04 0 0 1 2.041 2.04v.664h-4.082"></svg:path>`,
})
export class ArcticonsJeepIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJeepBohIcon],svg[arcticons-jeep-boh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.582 13.577v6.122a2.04 2.04 0 0 1-2.041 2.041h0A2.04 2.04 0 0 1 11.5 19.7v-.678m10.787 1.652a2.04 2.04 0 0 1-1.774 1.03h0a2.04 2.04 0 0 1-2.04-2.04v-1.328a2.04 2.04 0 0 1 2.04-2.04h0a2.04 2.04 0 0 1 2.041 2.04V19h-4.082m13.946-2.74v8.163m0-4.796c0 1.127.914 2.041 2.041 2.041h0a2.04 2.04 0 0 0 2.041-2.04V18.3a2.04 2.04 0 0 0-2.041-2.04h0a2.04 2.04 0 0 0-2.041 2.04m-3.158 2.41a2.04 2.04 0 0 1-1.774 1.03h0a2.04 2.04 0 0 1-2.04-2.041v-1.327a2.04 2.04 0 0 1 2.04-2.04h0a2.04 2.04 0 0 1 2.041 2.04v.664h-4.082M24 25.667l1.07 3.31h3.486l-2.818 2.04l1.078 3.316l-2.81-2.05l-2.822 2.05l1.081-3.306l-2.82-2.05l3.478.006zm-10.078.823l.803 2.487h2.619l-2.117 1.532l.81 2.49l-2.111-1.539L11.807 33l.812-2.484l-2.119-1.54l2.613.005zm20.156 0l.803 2.487H37.5l-2.116 1.532l.809 2.49l-2.111-1.539L31.963 33l.812-2.484l-2.119-1.54l2.613.005z"></svg:path>`,
})
export class ArcticonsJeepBohIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJeevanPramaanIcon],svg[arcticons-jeevan-pramaan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.816 45.386c.757-2.49 1.515-4.98.575-7.758s-3.578-5.84-6.216-8.905M36.372 16.13c.707 1.641 1.415 3.282.943 6.32c-.471 3.036-2.121 7.469-4.84 8.747s-6.51-.598-10.299-2.475"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.816 45.386c5.205-3.051 10.41-6.102 11.835-10.978s-.927-11.576-3.28-18.277"></svg:path><svg:circle cx="30.096" cy="25.232" r="3.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.662 43.078c-3.984-3.146-7.969-6.292-9.175-9.977c-1.207-3.684.364-7.907 1.936-12.13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.353 26.983c.012-1.66.023-3.32 1.42-5.786c1.396-2.466 4.176-5.737 4.927-8.26s-.528-4.296-1.807-6.07m-6.47 14.106l1.93 6.01"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.893 6.868c5.974 2.572 11.947 5.145 14.865 9.572c2.918 4.428 2.782 10.71 2.645 16.993"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.662 43.078c-2.476.4-4.953.8-9.4-1.257c-4.448-2.057-10.866-6.571-12.353-13.987c-1.487-7.415 1.958-17.731 8.91-22.287C19.77.99 30.228 2.196 36.31 6.067s7.79 10.407 8.076 15.413c.286 5.005-.849 8.479-1.984 11.952"></svg:path>`,
})
export class ArcticonsJeevanPramaanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJeevansathiIcon],svg[arcticons-jeevansathi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.64 11l-5.832 21.77c-.813 3.032-3.959 4.849-6.991 4.036c-3.033-.812-4.85-3.958-4.037-6.991l.517-1.93m16.849 4.737c.881.66 1.762.88 3.524.88h.88c1.542 0 2.864-1.32 2.864-2.862s-1.322-2.863-2.863-2.863h-1.982c-1.542 0-2.863-1.322-2.863-2.863s1.321-2.863 2.863-2.863h.88c1.983 0 2.864.22 3.524.88"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z"></svg:path>`,
})
export class ArcticonsJeevansathiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJefitIcon],svg[arcticons-jefit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="31.194" cy="8.094" r="3.594" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.824 37.617c-.116-.044-.667-.169-1.19-.334a14 14 0 0 1-1.114-.413c-6.276-2.62-9.73-7.79-9.73-14.71q0-.836.081-1.668m33.899-2.197a17.2 17.2 0 0 1 .44 3.865h0a17.21 17.21 0 0 1-8.02 14.552M9.8 12.438a17.21 17.21 0 0 1 18.394-6.969"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.238 32.5c2.452 7.433 6.94 11 11.51 11a6.56 6.56 0 0 0 2.943-.466a12 12 0 0 0 1.405-.68a11.2 11.2 0 0 0 1.864-1.512a11.8 11.8 0 0 0 1.63-1.939a38 38 0 0 0 4.544-10.198c.782-2.782 1.353-5.624 1.972-8.447c.181-.836.33-1.662.43-2.384a16 16 0 0 0 3.438-1.762a15.4 15.4 0 0 0-2.41-4.576c-4.348 2.336-10.63 3.675-17.232 3.675a44 44 0 0 1-11.337-1.493a15.7 15.7 0 0 0-1.801 4.789a42.9 42.9 0 0 0 12.984 1.87a60.5 60.5 0 0 0 9.24-.64c-1.212 11.557-5.656 19.705-10.79 19.705c-2.524 0-5.276-1.848-7.248-5.495"></svg:path>`,
})
export class ArcticonsJefitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJelbiIcon],svg[arcticons-jelbi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.027 9.66a8.485 8.485 0 0 0 16.97 0M10.124 41.766A8.485 8.485 0 0 0 4.5 27.29M37.876 8.238A8.485 8.485 0 0 0 43.5 22.714m-26.382 8.262a6.91 6.91 0 0 0 12.883-3.474V13.304m-11.313-7.07h12.618M4.5 22.713h12.618m2.549 16.807h10.334m6.907-15.284V34.57"></svg:path>`,
})
export class ArcticonsJelbiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJellyIcon],svg[arcticons-jelly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5a21.5 21.5 0 0 0 0 43c4.45 0 8.06-9.63 8.06-21.5S28.45 2.5 24 2.5m0 43a21.49 21.49 0 0 0 1.09-42.95c8 .81 14.25 10.17 14.25 21.45c0 11.87-6.87 21.5-15.34 21.5"></svg:path>`,
})
export class ArcticonsJellyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJellybookIcon],svg[arcticons-jellybook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.5 40V6.5a2 2 0 0 0-2-2h-25a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.2 18.359c-.761 0-3.221 4.458-2.85 5.21s5.33.749 5.701 0s-2.084-5.21-2.85-5.21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.2 11.539c-2.3 0-9.716 13.442-8.583 15.709c1.134 2.267 16.053 2.243 17.172 0s-6.284-15.71-8.588-15.71m5.645 13.738c-.734 1.472-10.512 1.491-11.255 0s4.106-10.29 5.61-10.29s6.36 8.823 5.645 10.29M18.5 4.5a2 2 0 0 0-2 2v5.242l-2-1.484l-2 1.484m2-7.242a2 2 0 0 0-2 2v5.242"></svg:path>`,
})
export class ArcticonsJellybookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJellydriftIcon],svg[arcticons-jellydrift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.85 23.574h13.597v6.96H11.85zm-6.117 6.96h-.669L4.5 28.88v-5.306h7.35v6.96h-.82m20.843 0h1.715l3.945-.803v-3.753s-3.79-2.404-12.086-2.404v6.96h1.131m-6.539-13.285h-6.918l-1.271 6.325h13.597l-.868-1.015zM43.5 27.19v-3.754s-3.789-2.404-12.086-2.404m0 0l-.868-1.014l-4.539-5.31h-6.919"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 23.574v-1.889l8.621-4.436"></svg:path><svg:circle cx="8.38" cy="30.642" r="2.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.226" cy="30.642" r="2.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.039 17.249l5.967-2.541m-12.885 2.541l5.967-2.541m6.359 8.866l5.967-2.542m6.119 8.699l5.967-2.542m-5.967-1.074l5.967-2.541"></svg:path>`,
})
export class ArcticonsJellydriftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJellyfinIcon],svg[arcticons-jellyfin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 20c-1.62 0-6.85 9.48-6.06 11.08s11.33 1.59 12.12 0S25.63 20 24 20"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5c-4.89 0-20.66 28.58-18.25 33.4s34.13 4.77 36.51 0S28.9 5.5 24 5.5m12 29.21c-1.56 3.13-22.35 3.17-23.93 0S20.8 12.83 24 12.83s13.52 18.76 12 21.88"></svg:path>`,
})
export class ArcticonsJellyfinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJeniusIcon],svg[arcticons-jenius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.251 13.09c5.135 0 9.31 4.174 9.31 9.309c0 5.146-4.175 9.32-9.31 9.32c-5.146 0-9.32-4.174-9.32-9.32c0-5.135 4.174-9.31 9.32-9.31"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.933 7.511c9.153 0 16.567 7.282 16.567 16.267c0 8.973-7.414 16.255-16.567 16.255s-16.579-7.282-16.579-16.255c0-8.985 7.426-16.267 16.58-16.267"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.507 12.897c8.278 0 14.996 6.178 14.996 13.796S27.785 40.49 19.507 40.49C11.218 40.49 4.5 34.312 4.5 26.694s6.718-13.796 15.007-13.796"></svg:path>`,
})
export class ArcticonsJeniusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJerboaForLemmyIcon],svg[arcticons-jerboa-for-lemmy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.473 18.709l-2.508-.044l-3.264-5.602l7.76 4.27c.292-1.22 1.482-1.114 2.295-.961c1.71.32 2.772 2.18 3.74 3.632a2.9 2.9 0 0 1-1.526 1.709a2.9 2.9 0 0 1-1.521-.111c-1.034.998-3.057 1.006-4.815.614m5.034 3.015c1.266-1.181-.86-1.372-1.98-1.315c-1.022.052-2.972 1.37-3.634 1.576l-2-2.029m.908.922l-1.982 1.467m-1.298-2.929s2.65 3.068.448 5.728s-7.418 3.525-8.092 5.878h17.284s-3.327-2.545-6.419-1.718s-10.865 1.718-10.865 1.718"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.5 33.695s.918-1.606-.48-2.333s-3.693-.101-3.898-1.742s-1.551-7.12 1.73-12.057s11.356-.198 11.356-.198"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.182 29.896s-4.867 5.094-10.944 5.04s-7.648-5.978-3.174-8.001s10.552-3.959 7.508-6.779s-8.94-4.64-8.94-4.64s1.761 4.224 2.752 4.315s5.377-.357 5.377-.357"></svg:path><svg:circle cx="40.333" cy="19.138" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsJerboaForLemmyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJerseyMikesIcon],svg[arcticons-jersey-mikes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.256 19.441v2.7c0 1.1-.9 2-2 2c-.6 0-1.1-.2-1.4-.6m-25.112-10.2v6c0 1.1-.9 2-2 2s-2-.9-2-2v-.7m9.98 1.7c-.3.6-1 1-1.7 1c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2s2 .9 2 2v.7h-4m19.651 1.6c-.3.6-1 1-1.7 1c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2s2 .9 2 2v.7h-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.256 16.041v3.3c0 1.1-.9 2-2 2s-2-.9-2-2v-3.3m-15.951-.1v5.4m0-3.4c0-1.1.9-2 2-2m2.09 5c.4.3.8.4 1.6.4h.4c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3h-.9c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3h.4c.9 0 1.3.1 1.6.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.303 34.258c.4.3.8.4 1.6.4h.4c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3h-.9c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3h.4c.9 0 1.3.1 1.6.4m-19.705-.6v5.4m12.658-1c-.3.6-1 1-1.7 1c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2s2 .9 2 2v.7h-4m-20.259 2.5v-7.9l4 8l4-8v8m7.641-2.9l2.8 2.8m-4-1.6l3.6-3.7m-3.6-2.7v8.1"></svg:path><svg:circle cx="19.698" cy="26.858" r=".7" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.768 28.608c.5-.2.5-.7.5-1v-.7"></svg:path><svg:circle cx="35.018" cy="26.908" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsJerseyMikesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJetaudioIcon],svg[arcticons-jetaudio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.64 24.47c-2 .47-2.21-1.66.33-3.94c9.86-6.53 21.72-4.76 12.68 6.85l-2.59 2.87c2.21-7.39-4.27-8.54-10.42-5.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.1 26.21q-6.41-1.23-3.03-7.23c4.2-6.48 12.01-11.2 21.86-10.75c10.73 1.6 11.95 7.54 8.35 12.77c-2.64 4.04-8.09 7.18-14.96 10.6q-1.88 2.92-5.13 5.11c-11.21 5.8-17.35-1.48-7.09-10.5"></svg:path>`,
})
export class ArcticonsJetaudioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJetblueIcon],svg[arcticons-jetblue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.981 21.956v5.8c0 .66-.529 1.193-1.182 1.193h0c-.326 0-.621-.133-.835-.349"></svg:path><svg:circle cx="10.981" cy="19.801" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.191 25.73a1.76 1.76 0 0 1-1.528.888h0a1.76 1.76 0 0 1-1.76-1.76v-1.143c0-.971.788-1.76 1.76-1.76h0c.971 0 1.76.789 1.76 1.76v.572h-3.52m25.903 1.443c-.303.53-.875.888-1.53.888h0a1.76 1.76 0 0 1-1.759-1.76v-1.143c0-.971.788-1.76 1.76-1.76h0c.972 0 1.76.789 1.76 1.76v.572h-3.52m-16.946-3.783v5.235c0 .485.394.88.88.88h.264m-2.067-4.663h1.847m4.73 1.144a1.76 1.76 0 0 1 0 3.518h-2.903v-7.037h2.903a1.76 1.76 0 0 1 0 3.518m0 0h-2.903m6.301-3.519v6.159c0 .485.394.88.88.88h.263m1.389-4.663v2.903c0 .972.787 1.76 1.759 1.76h0a1.76 1.76 0 0 0 1.76-1.76v-2.903m-.001 2.903v1.759"></svg:path>`,
})
export class ArcticonsJetblueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJetbrainsIcon],svg[arcticons-jetbrains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.007 14.015h1.81m.873 2.788h-2.683v-5.575h2.683m-5.056 0v4.181c0 .766-.604 1.394-1.342 1.394h0c-.738 0-1.341-.628-1.341-1.394v-.488m9.655-3.693h3.488m-1.744 5.575v-5.575m5.404 8.572v5.575m-11.065 0V19.8h1.744c1.006 0 1.811.837 1.811 1.882s-.805 1.881-1.811 1.881h-1.744m1.916.109l1.572 1.633m9.988.07V19.8l3.555 5.575V19.8m2.292 4.948c.335.418.738.627 1.342.627h.805c.737 0 1.341-.627 1.341-1.393h0c0-.767-.604-1.394-1.341-1.394h-.872c-.738 0-1.342-.627-1.342-1.394h0c0-.766.604-1.393 1.342-1.393h.804c.604 0 1.007.139 1.342.627m-26.187 2.16c.738 0 1.342.627 1.342 1.394s-.604 1.393-1.342 1.393h-2.213V19.8h2.213c.738 0 1.342.628 1.342 1.394s-.604 1.394-1.342 1.394m.222 0h-2.28m13.863.906h-2.414m-.604 1.881l1.81-5.575l1.812 5.575M9.5 36.772h12.493"></svg:path>`,
})
export class ArcticonsJetbrainsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJetpackIcon],svg[arcticons-jetpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 6.995v20.601H13.361zm0 34V20.394h10.639z"></svg:path>`,
})
export class ArcticonsJetpackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJetpackJoyrideIcon],svg[arcticons-jetpack-joyride-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.727 21.852s-1.046-3.668.826-5.749c0 0-3.467-7.489 10.61-2.843c0 0 3.19-.208 4.993 1.11c1.612-2.54.883-7.308 0-5.27c0 0-.624-3.26-1.664-2.843s-.555 1.179-.555 1.179s-3.328-4.438-2.912-1.11c0 0-4.541-3.97-3.537-.203c0 0-3.658-2.188-2.69.359c0 0-4.698-2.368-3.228.466c0 0-5.727-.59-2.785 2.166c-1.723-.675-5.734 2.763-1.698 3.5c0 0-2.475.61-.287 3.229c0 0-.5 2.013.466 3.072m1.935 4.363s.194 2.875 1.306 3.55c0 0 6.629 4.048 12.147 1.945c0 0 1.925-3.414 2.024-5.955a10.5 10.5 0 0 1 1.47-5.002a4.23 4.23 0 0 0 .008-3.446"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.684 21.111c.368-1.012 2.935-1.244 3.057.318c.086 1.1-.834 1.508-1.866 1.111m2.66 2.263a14 14 0 0 0-.556 2.183s-5.2-.317-6.034-.357c0 0-.913-.595-1.151-3.493a49 49 0 0 0 7.74 1.667m-12.98.794a10.3 10.3 0 0 1-2.58.476c-1.112 0 1.151.953 1.151.953s-.873.992-1.23.992a11.6 11.6 0 0 0 1.865.596l-.555.992l1.786.238l-.615 2.66"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.053 28.058s-1.39 1.151-1.429 2.223a17.4 17.4 0 0 0 .437 3.176s-1.609.81-.238 3.85s5.126-.247 4.922-2.025"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.61 33.11c.55.55.72 1.271.38 1.61s-1.06.17-1.61-.38s-.72-1.27-.38-1.61s1.06-.17 1.61.38m-1.366 1.308l-.145.144m13.644-5.342a3.8 3.8 0 0 0 1.42.366c.594.052-1.072.636-1.35.715s-.12.595.138 1.111s-1.627.536-1.627.536a.61.61 0 0 0 .417.635c.456.12-1.191.358-1.191.358a1.07 1.07 0 0 0-.358.833a3.344 3.344 0 0 1-1.478 3.821"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.023 31.687s.684.2.882 1.49a1.62 1.62 0 0 1 .708 1.029m.468 2.47c-.172 3.657-4.278 2.285-3.967-.073"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.04 34.845a1.028 1.028 0 1 1-1.617 1.114a1.197 1.197 0 0 1 .054-1.652a.9.9 0 0 1 .854-.051a1.6 1.6 0 0 1 .71.589m-6.496 1.078s.28 2.358-.309 3.06c0 0-4.52 2.33-3.256-1.965m-6.288 1.572a2.74 2.74 0 0 0 2.555.309a7.6 7.6 0 0 1 2.358-2.162"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.906 38.815s.87 3.93 2.892.308m3.789-1.375c-1.247.675-1.392 4.269 1.179 2.133m7.48-3.747l-.407.309M21.266 18.915c-6.39-3.013-2.453 8.516 1.935 4.363"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.798 20.952s-2.461 1.47-3.85 8.972a6.6 6.6 0 0 0 5.55 4.446"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.463 31.115l-.516 1.35s.755 3.175 5.32 3.334"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.749 29.13l-2.263-2.183l.159 5.2l-4.756.31l4.033 2.397l-3.366 3.247l5.836.286l.635 5.113l2.548-4.041l4.915 3.247l-1.183-3.096l.897-1.072"></svg:path>`,
})
export class ArcticonsJetpackJoyrideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiaoguan12123Icon],svg[arcticons-jiaoguan12123-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path d="m21.6 21.05l2-1.1v8.1m2.75-5.4c0-1.6 1.5-2.9 3.2-2.6c1.1.2 2 1.2 2.1 2.3c0 .8-.2 1.7-.8 2.2c-1.1.9-4.5 3.5-4.5 3.5h5.3m2.75-.7c.6.5 1.1.7 2.5.7h.3c1.1 0 2-.9 2-2h0c0-1.1-.9-2-2-2m-2.8-3.4c.6-.5 1.2-.7 2.5-.7h.3c1.1 0 2 .9 2 2h0c0 1.1-.9 2-2 2m-1.5.1h1.5m-28.4-3l2-1.1v8.1m2.75-5.4c0-1.6 1.5-2.9 3.2-2.6c1.1.2 2 1.2 2.1 2.3c0 .8-.2 1.7-.8 2.2c-1.1.9-4.5 3.5-4.5 3.5h5.3"></svg:path></svg:g>`,
})
export class ArcticonsJiaoguan12123Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJidoujishoIcon],svg[arcticons-jidoujisho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M41.188 16.517c-.063.63-.087.561.008 1.333c.1.805.647 2.38 1.197 2.913c.573.555.062 1.185-.438 1.807c.294.415-.07.94-.484 1.323c-.011.65-.606.713-.77 1.242c-.266.858-.083 1.906-1.146 2.197c-2.69.735-5.58-1.181-7.116-2.455"></svg:path><svg:path d="M39.54 19.231c-1.517.806-2.947-.383-2.947-.383m3.314-3.392c-2.297-.647-2.916-.187-2.916-.187m4.197 1.248c-1.676.253-4.62.143-4.62.143"></svg:path><svg:path d="M36.57 16.66c-1.259 3.274-6.814 4.632-5.932 4.103c3.846-2.307 3.498-5.48 3.498-5.48m.025 4.144c-.182 1.045-.401 3.53-.865 4.333a5.3 5.3 0 0 1-.85 1.123c-1.597 1.58-3.434.97-3.434.97s1.415-.024 2.322-2.003c1.802-3.928-.491-10.579 1.47-13.644c1.626-2.54 5.046-2.102 5.046-2.102s5.323.17 5.008 8.02c-.013.338-1.67.393-1.67.393M32.37 9.152c-1.013 1.153-1.166 2.486-1.166 2.486m.332-2.879c-1.013 1.152-1.166 2.485-1.166 2.485"></svg:path><svg:path d="M31.127 8.366c-1.32-1.099-3.371-.884-4.667 0c-2.412 1.647-2.022 5.892-3.376 8.23c-.568.473 2.19-.736 3.105-3.022c.577-1.44.796-2.036 1.457-2.593l-.127 1.969c1.824-.64 1.268-2.11 2.867-1.812"></svg:path><svg:path d="M37.85 8.104c-9.371-6.511-19.712-1.047-20.666 13.14c-.37 5.496-4.428 5.143-6.374 7.921c-2.327 3.322-1.883 9.125-6.31 10.416c1.995.773 2.938.19 4.427-1.291c0 0 .383 1.989-1.745 4.84c3.38-1.121 4.4-4.21 5.334-7.572c.203 5.13-.927 6.204-.965 6.441c3.286-.942 4.502-5.07 4.502-5.07s.624 1.991 2.588 4.327c-1.663-12.09 5.456-13.846 5.456-13.846m-5.264 6.729s7.283-1.9 9.816-4.482c1.245-1.27 1.945-2.23 2.155-4.913m4.219 2.028c-2.007.295-3.101 3.124-2.946 4.137c.48 3.137 2.393 5.996 2.393 5.996M39.476 8.14c.958-.972 2.623-.846 3.385 0c1.677 1.861-.53 4.053-.07 5.81"></svg:path><svg:path d="M33.112 28.013c-1.859.174-2.883-.538-2.883-.538m-4.986 4.965c2.308 2.573 2.336 5.906 2.336 5.906m-3.817-5.599c1.064 1.28-.524 2.002-.09 2.84c.311.602 1.202.36 1.692 1.101c.559.844-.171 1.495-.171 1.495m7.042-8.467c1.303 2.32 2.089.98 3.816 2.136c1.728 1.156 2.093 2.908 2.093 2.908"></svg:path><svg:path d="M36.366 35.946c.06-1.488-1.082-.473-1.28-.97c-.18-.454.459-1.01.242-1.445c-.232-.466-1.098-.263-1.377-.701c-.29-.456-.065-1.628-.065-1.628"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.438 27.953a19 19 0 0 1-1.83-8.172C9.62 13.672 12.541 7.96 17.42 4.508C9.995 7.554 5.11 14.986 5.09 23.266c0 4.09 1.502 8.216 3.516 11.399m5.532 5.645c3.071 2.092 6.513 3.183 10.462 3.182c8.845-.014 16.573-6.196 18.831-15.063c-3.1 6.08-9.198 9.895-15.852 9.915c-3.396 0-6.4-.637-9.11-2.328"></svg:path>`,
})
export class ArcticonsJidoujishoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiffyIcon],svg[arcticons-jiffy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.429 2.967A21.5 21.5 0 0 0 24 2.5a21.5 21.5 0 0 0-4.389.508m24.814 14.408a21.5 21.5 0 0 0-13.729-13.84m-13.359.022a21.364 21.364 0 0 0-14.326 24.99M30.674 44.42A21.5 21.5 0 0 0 45.5 24a21.5 21.5 0 0 0-.49-4.31h0M3.643 30.846a21.41 21.41 0 0 0 24.763 14.186M17.798 13.114l8.355 15.762m-.136-6.166l10.9-6.572M19.629 26.687l2.133-1.374"></svg:path>`,
})
export class ArcticonsJiffyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJihanpiIcon],svg[arcticons-jihanpi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.997 17.012a15.532 15.532 0 1 1 22.769 17.471C24.824 38.491 24 42.5 24 42.5s-.823-4.009-7.766-8.017a15.53 15.53 0 0 1-7.237-17.47z"></svg:path><svg:circle cx="30" cy="14.033" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28 31.033h-7a6 6 0 0 1-6-6V13.89"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 21.033s6.667-.822 13.824-2.74"></svg:path>`,
})
export class ArcticonsJihanpiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJimmyJohnsIcon],svg[arcticons-jimmy-johns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.299 32.098l-.002 8.037l1.015.317c1.346.418 2.697.829 4.083 1.085c2.333.432 4.834.397 6.97-.635c1.233-.596 2.305-1.51 3.116-2.612s1.36-2.392 1.628-3.735c.098-.49.159-.987.193-1.485c.032-.47.04-.94.049-1.411q.218-12.71.117-25.42"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.466 6.239l-15.89-.023l-.013 8.829l4.29.006l-.022 15.453c0 .242-.005.485-.06.72a1.6 1.6 0 0 1-.32.644c-.155.185-.355.33-.574.432s-.453.167-.69.215a6.46 6.46 0 0 1-3.89-.417m-19.794-.015L5.5 40.121l1.015.317c1.346.417 2.697.828 4.083 1.085c2.333.432 4.834.397 6.97-.636c1.232-.595 2.305-1.51 3.116-2.612s1.36-2.392 1.628-3.734c.098-.49.159-.987.193-1.486c.032-.47.04-.94.049-1.41q.218-12.71.117-25.421"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.67 6.225L6.78 6.202l-.013 8.828l4.29.007l-.022 15.453c0 .241-.005.485-.06.72a1.6 1.6 0 0 1-.32.644c-.155.184-.355.329-.574.432s-.454.166-.69.215a6.46 6.46 0 0 1-3.891-.417"></svg:path>`,
})
export class ArcticonsJimmyJohnsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJinovelIcon],svg[arcticons-jinovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.635 5.5l2.776 3.044M13.903 27.111l-2.759-3.06m0 0L31.635 5.5l-3.372.183L7.771 24.236zm2.759 3.06L34.41 8.544l.002 3.24l-20.51 18.569z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.284 28.884c-1.543-.615-1.392.789-.444 3.161c.822.015 2.094.126 2.543-.526c1.566-2.272-.565-4.938-1.985-5.267c-4.8-1.114-3.821 4.22-1.837 6.976c3.636 5.052 8.336 8.663 14.145 9.135c4.708.382 7.401-.073 12.134-.839c2.032-.329 4.275-1.342 8.235-1.17"></svg:path>`,
})
export class ArcticonsJinovelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiocareersIcon],svg[arcticons-jiocareers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.325 9.145h27.796V42.5H8.325zm4.647 24.971h18.592M13.112 38.87h18.591"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.609 5.5h27.066v33.629"></svg:path><svg:circle cx="22.088" cy="15.017" r="3.848" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.11 29.58h12.502m-.001 0c.527-.127 1.172-.283 1.322-1.427s-.135-3.29-1.515-5.005s-3.856-3-6.37-2.946c-2.513.054-5.063 1.446-6.42 3.2s-1.516 3.87-1.237 4.96c.28 1.09.999 1.154 1.718 1.218"></svg:path>`,
})
export class ArcticonsJiocareersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiocinemaIcon],svg[arcticons-jiocinema-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.656 19.224H42.5v19.548a3.663 3.663 0 0 1-3.663 3.663H10.319a3.663 3.663 0 0 1-3.663-3.663z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.03 30.416l-7.759-4.868a.488.488 0 0 0-.748.414v9.736a.488.488 0 0 0 .748.414l7.759-4.868a.49.49 0 0 0 0-.828m7.491-24.494l-1.056 4.267l-5.225.961l1.056-4.267l-5.447 1.002l-1.057 4.268l-5.225.961l1.057-4.267l-5.448 1.002l-1.056 4.267l-5.225.962l1.056-4.267l-4.451.819a1.22 1.22 0 0 0-.98 1.422l1.136 6.173l35.252-6.487l-1.136-6.173a1.22 1.22 0 0 0-1.422-.98Z"></svg:path>`,
})
export class ArcticonsJiocinemaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiofinanceIcon],svg[arcticons-jiofinance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.443 5.648l.603-.148c1.606 1.159 3.104 2.626 3.71 4.537c1.458 3.643-.322 8.127-3.777 10.023c-.795 0-1.306-.693-1.858-1.15c-2.862-2.496-3.458-6.968-1.574-10.192c.694-1.236 1.78-2.204 2.896-3.07M7.03 24.278c11.11-.12 22.228 0 33.344-.019c.823-.077 1.795.287 2.06 1.107c.281 2.01-.382 4.003-1.145 5.843c-1.799 4.346-5.418 7.943-9.828 9.783c-4.837 2.099-10.63 2-15.398-.256C10.17 38.11 6.021 32.242 5.5 25.946c.01-.802.738-1.533 1.53-1.668"></svg:path>`,
})
export class ArcticonsJiofinanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiohomeIcon],svg[arcticons-jiohome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24m43 0c0-11.874-9.626-21.5-21.5-21.5S2.5 12.126 2.5 24m7.909-1.253L24 8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.83 19.836V35H13.17V19.836m24.421 2.911L24 8"></svg:path><svg:circle cx="24" cy="25.39" r="1.873" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="15.288" r="1.873" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="30.968" r="1.873" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17.987" cy="25.39" r="1.873" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="19.377" cy="19.836" r="1.873" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.127 25.39h-2.268M24 23.517V17.16m0 11.935v-1.832m-3.474-5.948l2.135 2.767"></svg:path><svg:circle cx="30.013" cy="25.39" r="1.873" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.623" cy="19.836" r="1.873" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.873 25.39h2.268m-.667-4.075l-2.135 2.767"></svg:path>`,
})
export class ArcticonsJiohomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiojoinIcon],svg[arcticons-jiojoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="30" height="22" x="3.57" y="10.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.57 25.541l7.92 4.573a1 1 0 0 0 1.5-.866V15.392a1 1 0 0 0-1.5-.866l-7.92 4.573m-15-4.479a3.394 3.394 0 1 1-3.394 3.394a3.394 3.394 0 0 1 3.394-3.394m0 8.44c3.772 0 6.789 1.057 6.789 2.316v3.244H11.78v-3.229c0-1.274 3.018-2.331 6.789-2.331Z"></svg:path>`,
})
export class ArcticonsJiojoinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiomartIcon],svg[arcticons-jiomart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.79 15.202s1.223-9.99-7.943-9.99s-7.943 9.99-7.943 9.99l-4.036.001s-3.758.243-3.598 4.56L9.71 37.83s.799 4.877 4.876 4.957H24l9.413.001c4.078-.08 4.877-4.957 4.877-4.957l1.44-18.069c.16-4.317-3.598-4.556-3.598-4.556zm-15.886 0H31.79"></svg:path>`,
})
export class ArcticonsJiomartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJionewsIcon],svg[arcticons-jionews-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m41.705 22.622l-12.846-7.416a1.591 1.591 0 0 0-2.387 1.378v14.832a1.591 1.591 0 0 0 2.387 1.378l12.846-7.416a1.591 1.591 0 0 0 0-2.756m-20.419 6.256H5.5m15.786-9.756H5.5m15.786-9.755H5.5m15.786 29.266H5.5"></svg:path>`,
})
export class ArcticonsJionewsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJioposLiteIcon],svg[arcticons-jiopos-lite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="9.33" height="16.838" x="19.576" y="25.662" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.099" ry="1.099"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.576 38.425h-7.748a3.415 3.415 0 0 1-3.405-3.405V22.297m31.155.13V35.02a3.415 3.415 0 0 1-3.406 3.405h-7.265m-8.392-19.197a3.485 3.485 0 1 1-6.971 0L17.967 8.61"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.457 19.228a3.485 3.485 0 1 0 6.97 0L33.519 8.61H14.482l-7.91 10.618a3.485 3.485 0 1 0 6.972 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.486 19.228a3.485 3.485 0 1 0 6.97 0L30.033 8.61m-3.915 0l1.367 10.618a3.485 3.485 0 1 1-6.97 0L21.882 8.61m11.073 0v-1.5c0-.889-.72-1.609-1.609-1.609H16.654c-.889 0-1.61.72-1.61 1.609v1.5"></svg:path><svg:circle cx="24.241" cy="39.908" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsJioposLiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiosaavnIcon],svg[arcticons-jiosaavn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 31.85c4.562-2.96 14.757 1.08 15.07 10.65c0 0 1.402-23.687-15.07-23.687"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.953 5.5c3.928 15.338.752 24.428-3.617 31.313c.42-9.589-7.57-27.13-10.514-31.313M42.5 27.56c-4.372.203-12.168 4.538-15.958 14.94c0-12.512 2.224-18.724 15.958-23.687"></svg:path>`,
})
export class ArcticonsJiosaavnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiosphereIcon],svg[arcticons-jiosphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.735 29.078c-.245.427-.294.35-.436-.3s-.376-1.871-.46-3.371c-.082-1.5-.014-3.278.791-4.553s2.346-2.046 5.728-2.888c3.382-.841 8.605-1.753 12.936-1.601c4.332.152 7.772 1.368 9.472 2.618s1.658 2.536 1.008 3.752s-1.906 2.362-4.463 2.507c-2.556.145-6.41-.711-10.535-.621c-4.124.09-8.518 1.126-10.936 2.11s-2.86 1.92-3.105 2.347m2.214-13.748c-.034.58.808-.221 2.694-.967c1.886-.747 4.815-1.437 8.076-1.638s6.853.09 8.885.076c2.03-.014 2.5-.331 2.604-.919c.104-.587-.159-1.443-1.782-2.314c-1.624-.87-4.608-1.755-7.938-1.547s-7.005 1.506-9.299 3.136s-3.205 3.592-3.24 4.173m6.949 24.657c-.586-.135-2.833-1.239-4.401-2.543s-2.458-2.809-1.989-4.113s2.296-2.408 5.77-3.048s8.592-.816 11.778-.318s4.435 1.67 4.528 3.083s-.972 3.063-3 3.575s-5.016-.112-7.552.003s-4.616.97-5.12 1.815c-.502.845.572 1.68-.014 1.546"></svg:path>`,
})
export class ArcticonsJiosphereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiotvIcon],svg[arcticons-jiotv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.07 14l13.86 8l-13.86 8z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 33.49v-23a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2v23a2 2 0 0 0 2 2h35a2 2 0 0 0 2-2m-25.95 6.02h12.9"></svg:path>`,
})
export class ArcticonsJiotvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiraIcon],svg[arcticons-jira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 22.972a8.736 8.736 0 0 0 8.736 8.736h2.056v2.056a8.736 8.736 0 0 0 8.736 8.736h0V22.972Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.236 14.236a8.736 8.736 0 0 0 8.736 8.736h2.056v2.056a8.736 8.736 0 0 0 8.736 8.736h0V14.236Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.972 5.5a8.736 8.736 0 0 0 8.736 8.736h2.056v2.056a8.736 8.736 0 0 0 8.736 8.736h0V5.5Z"></svg:path>`,
})
export class ArcticonsJiraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJishoIcon],svg[arcticons-jisho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.688 15.842c4.333-.466 9.369-1.717 14.125-4.197"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.734 5.5c-8.135 20.897-.572 30.312 1.638 34.312"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.3 23.89c-6.878 18.127-10.06 18.508-13.77 15.367c-2.34-1.983-.595-5.58 2.86-8.575c4.215-3.657 11.845-4.963 15.304-3.942c11.595 3.423 2.885 12.904-.203 15.76"></svg:path>`,
})
export class ArcticonsJishoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJitenIcon],svg[arcticons-jiten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.53 23.53v13.54m5.2-13.54v13.54m4.69-5.26H25.85m16.65 5.26H23.76m2.09 0V26.54h14.57v10.53M30.05 39.1c-1.89 1.67-5.77 3.27-5.77 3.27m11.45-3.27c2.3.91 4.44 2.29 5.71 3.27M19.41 24.44v-9.99m-4.55 4.47h9.09m-9.09-10.5h9.09m-9.75 6.03h10.41m-5.2-8.82v2.79M9.64 7.18v9.99m-3.23 7.27v-7.27h6.46v6.36m-6.46-.98h6.46M5.5 12.1h8.28M5.81 7.88c2.12-.31 5.16-.87 7.24-1.69m3.35 3.94c.62 1.09.87 2.82.87 2.82m5.19-2.9c-.4 1.59-1.24 2.98-1.24 2.98"></svg:path>`,
})
export class ArcticonsJitenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJitsimeetIcon],svg[arcticons-jitsimeet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19 34.56s.93-2-4.42-2.93c-2-.35-3.33 1.35-3.66 3.41c-.56 3.46.85 8.46.85 8.46c.39-1.32 1.58-5.46 4.29-6.11c0 0 1.64 2 5.46 2s8.25-3 9.08-5l1.44.52a11.4 11.4 0 0 0 4.26-6.27c.83-3.91 2.33-10.91-1.56-11.3s-7.54 4-7.54 4l-2.51-1.64s-1-5.87.17-7s5.91-2.75 6.53-4.51s-.24-4 .15-3.64a4.57 4.57 0 0 1 1.27 5a6.9 6.9 0 0 1-2.54 3a42 42 0 0 0 1.12-4.35"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.27 17.42c-.13 4.54 0 6 .44 6.93s2.29 5.2 2.29 5.2s-6-4.38-9.4-4.77a9.54 9.54 0 0 0-6.29 1.94c2.47-.4 3.73-.74 5.17 0s3.25 3.23 5.38 3.4a19.6 19.6 0 0 0 5.14-.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.69 19.7c-1.79 0-5.66 0-7.3 3.44c-1.32 2.75.6 6.85 3.31 8.17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.54 31.63c0 1.08-.93 4.74 1.48 5.76c.89.37 2.95-2.63 3.49-3.39a14.7 14.7 0 0 0 1.19-2.69c1.71.12 7.31-2.57 7.31-2.57m2.55 5.67a12 12 0 0 0 .8-4.24m-1.09-17.65c.6-.18 1.42.5 1.85 1.9s.4 3-.57 3.53s-2.58-.79-2.71-2.07s.46-3.07 1.43-3.36"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.31 16.17A14.9 14.9 0 0 1 29 14.42"></svg:path>`,
})
export class ArcticonsJitsimeetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJjdesignIcon],svg[arcticons-jjdesign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.759 13.5v18.787L22.546 34.5h-3.305"></svg:path>`,
})
export class ArcticonsJjdesignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJjsHouseIcon],svg[arcticons-jjs-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.327 29.232h7.183c1.849 0 1.989 0 2.064.132c.074.131.083.394.262 1.813c.18 1.42.53 3.995 3.174 6.419c2.643 2.423 7.58 4.695 11.597 4.178s7.113-3.822 8.775-6.263c1.663-2.441 1.89-4.018 2.004-5.06c.114-1.043.114-1.551.114-5.354V10.441c0-3.758 0-4.179-.565-4.389s-1.695-.21-5.848-.21H20.984c-3.775 0-4.152 0-4.49.149s-.634.447-2.13 1.943L8.48 13.816c-1.693 1.693-2.385 2.385-2.146 2.731s1.408.346 5.352.346h14.36c3.698 0 4.372 0 4.71.423c.337.423.337 1.268.337 3.45v7.72c0 2.022 0 2.549-.385 3.996c-.386 1.448-1.157 3.817-3.903 5.934s-7.469 3.984-11.043 3.716s-6-2.667-7.534-4.831s-2.172-4.091-2.473-5.323s-.263-1.767-.241-2.109s.028-.489.03-.563q.004-.074 1.782-.074z"></svg:path>`,
})
export class ArcticonsJjsHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJlabIcon],svg[arcticons-jlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24H7.5l4.125-7.145h6.188l-1.65 2.858h4.125L26.063 9.71h6.187zm0 0l8.25-14.289l4.125 7.145l-3.094 5.358l-1.65-2.858l-2.062 3.573l5.775 10.003l-3.094 5.358z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 24l8.25 14.289H24l-3.094-5.358h3.3l-2.062-3.573h-11.55L7.5 24z"></svg:path>`,
})
export class ArcticonsJlabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJmdictDroidIcon],svg[arcticons-jmdict-droid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.16 19.051c-1.325 8.324-1.44 15.706.362 21.958"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.027 23.388c6.173.184 12.352-.103 18.482-.858m-2.757 3.57c-2.512 7.385-5.836 13.039-11.025 14.547c-6.737 1.957-5.618-3.911-3.977-6.416c3.413-5.208 8.454-5.775 11.387-5.964c8.263-.53 10.168 6.587 8.224 9.489c-2.04 3.044-4.65 4.227-7.772 4.744"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.631 5.5a3.785 3.785 0 0 0-3.794 3.793v6.638a3.785 3.785 0 0 0 3.794 3.793h7.12l-1.286 6.452l6.127-6.452h5.114A3.785 3.785 0 0 0 42.5 15.93V9.293A3.785 3.785 0 0 0 38.706 5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.098 15.604a2 2 0 0 1-3.736-.993v-1.3a2 2 0 0 1 3.734-.996m-10.798.996a2 2 0 1 1 4 0v1.3a2 2 0 1 1-4 0m0 2V8.612m-3.063 5.999c0 1.105-.888 2-1.984 2h-.697c-.726 0-1.315-.593-1.315-1.325s.589-1.325 1.315-1.325h2.685"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.735 11.836c.482-.483.82-.525 1.75-.525c1.056 0 1.75.465 1.75 1.72v3.58"></svg:path>`,
})
export class ArcticonsJmdictDroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJmoIcon],svg[arcticons-jmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.17 17.248c12.662 11.423-4.982 22.835-20.345 20.345C30.868 35.102 39.38 24.93 39.169 17.248m-13.282-4.771c2.7 11.213-5.402 20.135-13.493 22.625C-4 28.25 7.413 10.408 25.887 12.477"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.428 8.747c-.2 15.353-5.39 26.565-27.595 30.506C29.617 31.57 31.277 20.569 31.698 8.747z"></svg:path>`,
})
export class ArcticonsJmoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoAustriaIcon],svg[arcticons-jo-austria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.66 42.67c-.08.05-.17.1-.26.15A21.4 21.4 0 0 1 24 45.5C12.13 45.5 2.5 35.87 2.5 24S12.13 2.5 24 2.5S45.5 12.13 45.5 24c0 3.95-1.06 7.65-2.92 10.83l.55 8.52z"></svg:path><svg:circle cx="29.023" cy="25.032" r="6.699" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.431" cy="14.311" r="2.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="25.614" cy="14.311" r="2.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17.819" cy="14.311" r="2.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.082 18.558h5.157v13.377c.023.236.158 1.859-1.067 3.122c-.996 1.027-1.991 1.164-2.546 1.164h-4.347l.434-5.017c.585.517 1.327.647 1.832.349c.26-.153.484-.379.484-.982zm13.941 8.333c1.402 0 2.095-.304 3.627-1.859c.09 1.95-.975 4.086-3.627 4.086s-3.718-2.135-3.628-4.086c1.533 1.555 2.225 1.86 3.628 1.86"></svg:path>`,
})
export class ArcticonsJoAustriaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJobbkkIcon],svg[arcticons-jobbkk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.427 19.332v-6.145c0-1.698 1.164-3.065 2.61-3.065h0c1.445 0 2.608 1.367 2.608 3.065v.44h.492c1.554 0 2.804 1.272 2.804 2.852h0c0 1.58-1.25 2.851-2.804 2.851zm-4.203-4.605c0 2.542-1.758 4.604-3.927 4.604s-3.927-2.06-3.927-4.604s1.758-4.605 3.927-4.605s3.927 2.061 3.927 4.604m-12.305-4.605v6.352c0 1.583-1.165 2.856-2.613 2.857h-2.25m29.511 9.34l-3.707 4.604m-2.445-4.539v4.538m0 4.54v-4.54h2.445l3.707 4.605m-10.51-9.208l-3.708 4.604m-2.445-4.539v4.538m0 4.54v-4.54h2.445l3.707 4.605m-18.623-.12v-5.983c0-1.653 1.139-2.984 2.553-2.984h0c1.415 0 2.553 1.33 2.553 2.984v.43h.481c1.52 0 2.745 1.238 2.745 2.776h0c0 1.538-1.224 2.777-2.745 2.777zM42.5 24h-37"></svg:path>`,
})
export class ArcticonsJobbkkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJobsdbIcon],svg[arcticons-jobsdb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.703 24.02a.857.857 0 1 1-1.715 0a.857.857 0 0 1 1.715 0m3.54 0c0 .567-.459 1.026-1.025 1.026h0c-.567 0-1.026-.46-1.026-1.026h0c0-.566.46-1.025 1.026-1.025h0c.566 0 1.025.459 1.025 1.025m3.752 0a1.212 1.212 0 1 1-1.212-1.212h0c.67 0 1.212.543 1.212 1.212m4.439 0a1.426 1.426 0 1 1-2.851 0a1.426 1.426 0 0 1 2.851 0m4.456 0a1.573 1.573 0 1 1-1.572-1.573h0c.868 0 1.572.704 1.572 1.573m4.814 0a1.692 1.692 0 1 1-3.383 0a1.692 1.692 0 0 1 3.383 0m4.796 0a1.79 1.79 0 0 1-1.79 1.791h0a1.79 1.79 0 0 1-1.791-1.79h0c0-.99.801-1.792 1.79-1.792h0c.99 0 1.791.802 1.791 1.791m-28.781 0a.684.684 0 0 1-.684.684h0a.684.684 0 0 1-.683-.684h0c0-.377.306-.684.683-.684h0c.378 0 .684.307.684.684m-2.829 0a.617.617 0 0 1-.617.617h0a.617.617 0 0 1-.617-.617h0a.617.617 0 1 1 1.234 0"></svg:path><svg:path fill="currentColor" d="M7.722 24.02a.75.75 0 0 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.703 19.483a.857.857 0 1 1-1.715 0a.857.857 0 0 1 1.715 0m3.54 0c0 .566-.459 1.025-1.025 1.025h0a1.025 1.025 0 0 1-1.026-1.025h0c0-.567.46-1.026 1.026-1.026h0c.566 0 1.025.46 1.025 1.026m3.752 0c0 .67-.543 1.212-1.212 1.212h0c-.67 0-1.212-.543-1.212-1.212h0a1.212 1.212 0 1 1 2.424 0m4.439 0a1.426 1.426 0 1 1-2.851 0a1.426 1.426 0 0 1 2.851 0m4.456 0c0 .868-.704 1.573-1.572 1.573h0a1.573 1.573 0 0 1-1.573-1.573h0a1.573 1.573 0 1 1 3.145 0m4.814 0c0 .934-.757 1.692-1.691 1.692h0a1.69 1.69 0 0 1-1.692-1.692h0a1.692 1.692 0 1 1 3.383 0m-23.985 0a.684.684 0 0 1-.684.683h0a.684.684 0 0 1-.683-.683h0a.684.684 0 1 1 1.367 0m-2.829 0c0 .34-.276.617-.617.617h0a.617.617 0 0 1-.617-.617h0c0-.341.276-.617.617-.617h0c.34 0 .617.276.617.617"></svg:path><svg:path fill="currentColor" d="M7.722 19.483a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.703 28.558a.857.857 0 1 1-1.715 0a.857.857 0 0 1 1.715 0m3.54 0c0 .566-.459 1.025-1.025 1.025h0a1.025 1.025 0 0 1-1.026-1.025h0c0-.567.46-1.026 1.026-1.026h0c.566 0 1.025.46 1.025 1.026m3.752 0c0 .669-.543 1.212-1.212 1.212h0c-.67 0-1.212-.543-1.212-1.212h0a1.212 1.212 0 1 1 2.424 0m4.439 0a1.426 1.426 0 1 1-2.851 0a1.426 1.426 0 0 1 2.851 0m4.456 0c0 .868-.704 1.573-1.572 1.573h0a1.573 1.573 0 0 1-1.573-1.573h0a1.573 1.573 0 1 1 3.145 0m4.814 0a1.692 1.692 0 1 1-3.383 0a1.692 1.692 0 0 1 3.383 0m-23.985 0a.684.684 0 0 1-.684.683h0a.684.684 0 0 1-.683-.683h0c0-.378.306-.684.683-.684h0c.378 0 .684.306.684.684m-2.829 0a.617.617 0 1 1-.617-.618h0c.34 0 .617.277.617.618"></svg:path><svg:path fill="currentColor" d="M7.722 28.558a.75.75 0 0 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.434 14.945a1.426 1.426 0 1 1-2.851 0a1.426 1.426 0 0 1 2.851 0m4.456 0c0 .869-.704 1.573-1.572 1.573h0a1.573 1.573 0 0 1-1.573-1.573h0a1.573 1.573 0 1 1 3.145 0m-4.456-4.584a1.426 1.426 0 1 1-2.851 0a1.426 1.426 0 0 1 2.851 0m0 22.734a1.426 1.426 0 1 1-2.851 0a1.426 1.426 0 0 1 2.851 0m4.456 0c0 .869-.704 1.573-1.572 1.573h0a1.573 1.573 0 0 1-1.573-1.573h0c0-.869.704-1.573 1.573-1.573h0c.868 0 1.572.704 1.572 1.573m-4.456 4.544a1.426 1.426 0 1 1-2.851 0a1.426 1.426 0 0 1 2.851 0"></svg:path>`,
})
export class ArcticonsJobsdbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJobstreetIcon],svg[arcticons-jobstreet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.912 18.088v7.368c0 1.356-1.1 2.456-2.456 2.456h0A2.456 2.456 0 0 1 11 25.456v-.816"></svg:path><svg:rect width="4.912" height="6.508" x="18.299" y="21.404" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.456" ry="2.456"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.806 27.363c.448.377.932.549 2.02.549h.55c.897 0 1.624-.728 1.624-1.627h0c0-.899-.727-1.627-1.624-1.627h-1.102a1.625 1.625 0 0 1-1.623-1.627h0c0-.899.727-1.627 1.623-1.627h.551c1.088 0 1.572.172 2.02.549M25.541 23.86c0-1.357 1.1-2.456 2.456-2.456h0c1.356 0 2.456 1.1 2.456 2.456v1.596c0 1.356-1.1 2.456-2.456 2.456h0a2.456 2.456 0 0 1-2.456-2.456m0 2.456v-9.824"></svg:path>`,
})
export class ArcticonsJobstreetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJobthaiIcon],svg[arcticons-jobthai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.94 26.643c0 .83-.67 1.502-1.5 1.503h-.001a1.5 1.5 0 0 1-1.499-1.503c0-.829.671-1.502 1.5-1.503h0c.83.001 1.5.674 1.5 1.503m-1.542 3.067v7.432m-3.287-4.035c0-2.228-1.803-4.036-4.028-4.036s-4.028 1.806-4.028 4.036s1.803 4.035 4.028 4.035s4.028-1.807 4.028-4.035v4.035m-18.719 0v-4.69zm7.463 0v-4.69c0-1.688-1.665-3.048-3.732-3.048s-3.73 1.36-3.73 3.048v-6.354M9.5 29.15v-3.052m2.683 10.943h-.401A2.28 2.28 0 0 1 9.5 34.766V29.15h2.682m-1.949-9.476c.346 1.185 1.466 2.052 2.794 2.052c1.605 0 2.905-1.265 2.905-2.825v-8.044m13.778 6.919c0 2.229 1.803 4.035 4.028 4.035s4.028-1.806 4.028-4.036s-1.803-4.036-4.028-4.036s-4.028 1.807-4.028 4.036v-6.918m-2.67 6.919a4.03 4.03 0 0 1-4.028 4.035c-2.224 0-4.028-1.807-4.028-4.036s1.804-4.036 4.028-4.036a4.03 4.03 0 0 1 4.027 4.036"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsJobthaiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJockeyIcon],svg[arcticons-jockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.088 4.5h15.08l-.029 27.892C30.133 38.717 25.31 43.5 19.348 43.5S8.585 38.717 8.585 32.776s4.8-10.724 10.763-10.724h7.008m7.596 0h5.463"></svg:path>`,
})
export class ArcticonsJockeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJodelIcon],svg[arcticons-jodel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.413 35.29c-.01-2.85-.47-4.489-4.797-4.522a.117.117 0 0 1-.115-.133c.722-4.703 2.224-7.295 4.464-10.37a.1.1 0 0 0 .021-.081C8.397 15.427 7.41 9.405 8.74 8.467s7.424 3.346 11.137 5.461a.1.1 0 0 0 .074.013c2.918-.455 4.935-.414 8.27.002a.1.1 0 0 0 .07-.014c4.26-2.444 11.064-5.847 12.024-4.998c.96.848.007 6.496-1.085 11.625a.12.12 0 0 0 .022.094c2.357 3.03 3.612 5.822 4.248 10.07a.117.117 0 0 1-.115.132c-4.131.025-4.825 1.188-4.84 4.437a.12.12 0 0 1-.116.117c-5.058.065-7.109 4.39-14.597 4.257S14.46 35.468 9.53 35.406a.12.12 0 0 1-.116-.116Z"></svg:path><svg:circle cx="18.508" cy="25.163" r="1.997" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.674" cy="25.163" r="1.997" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsJodelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoeyIcon],svg[arcticons-joey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.667 14.981a6.075 6.075 0 0 0-9.327-3.609c2.297-.055 2.629 1.26 2.629 1.26s-6.337-.457-5.369 5.41a1.9 1.9 0 0 1 1.938-.802s-3.672 4.9 3.297 5.452"></svg:path><svg:circle cx="16.86" cy="21.999" r="2.269" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 37.718c8.1 0 14.667-4.484 14.667-11.762c0-6.89-6.567-12.702-14.667-12.702S9.333 19.066 9.333 25.956c0 7.278 6.567 11.762 14.667 11.762"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.092 32.57S27.819 34.397 24 34.397s-5.092-1.827-5.092-1.827M24 30.8a2.783 2.783 0 0 0 3.044-2.796c0-1.218-.498-3.957-3.044-3.957s-3.044 2.74-3.044 3.957A2.783 2.783 0 0 0 24 30.8m7.334-15.819a6.075 6.075 0 0 1 9.326-3.609c-2.297-.055-2.629 1.26-2.629 1.26s6.337-.457 5.369 5.41a1.9 1.9 0 0 0-1.938-.802s3.672 4.9-3.297 5.453"></svg:path><svg:circle cx="31.14" cy="21.999" r="2.269" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsJoeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoinIcon],svg[arcticons-join-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="19.953" height="35.053" x="21.593" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.798"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.593 9.994h19.953M21.593 36.059h19.953M21.593 7.447H8.252a1.8 1.8 0 0 0-1.798 1.798v31.457A1.8 1.8 0 0 0 8.252 42.5H24.61a1.8 1.8 0 0 0 1.798-1.798M6.454 11.941h15.139M6.454 38.006h15.139"></svg:path><svg:circle cx="15.483" cy="25.187" r="1.895" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.378 25.187h4.215m0-1.895h9.711m-3.082 3.347l3.347-3.347l-3.347-3.347"></svg:path>`,
})
export class ArcticonsJoinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoiplayIcon],svg[arcticons-joiplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.995 31.98c.265 2.064-3.722 5.477-3.722 8.426a7 7 0 0 0 .574 2.761C10.913 45.354 6.44 36.177 6.705 32.664c.729.795 1.723 2.087 3.928 1.557a11.88 11.88 0 0 1 .015-13.784s-.298 3.347 1.723 5.236c0-3.612 2.916-5.5 2.916-7.886a8.1 8.1 0 0 0-1.06-4.043s4.373-.298 5.898 2.651c.099-4.142 3.61-10.404 9.376-11.895c-3.512 3.744 3.91 12.69 3.91 12.69a4.68 4.68 0 0 0 1.027-3.612c3.943 2.883 2.85 12.492 2.85 12.492s1.59.166 3.578-2.253c1.69 7.024-1.557 15.64-8.581 18.257c-1.028-5.434-3.446-17.031-3.446-19.682s3.214-4.241 3.214-4.241s-11.167 2.253-11.167 6.925c0 0-3.38 1.889-3.562 2.684a3.3 3.3 0 0 0 0 1.458s4.954-3.496 7.92-.845c.165 1.193-1.624 2.634-4.11 2.634s-2.948-.911-2.948-.911c-.017 1.391 1.557 5.759 1.557 4.407a1.775 1.775 0 0 1 2.005-1.889a9.9 9.9 0 0 0 3.247-.635"></svg:path>`,
})
export class ArcticonsJoiplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJokoIcon],svg[arcticons-joko-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.457 40.784q1.518-3.942 5.914-12.18q-4.232.465-8.237-1.18q6.58-13.94 18.835-22.252q3.918-2.146 2.399 2.562q-1.533 3.893-5.739 11.653q4.156-.3 8.237 1.08q-6.755 14.516-18.182 22.1q-4.608 2.525-3.227-1.783"></svg:path>`,
})
export class ArcticonsJokoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJonkopingsLanstrafikIcon],svg[arcticons-jonkopings-lanstrafik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.225 24H32.23c3.898 0 7.904 3.16 8.948 7.057l1.175 4.386c1.045 3.897-1.268 7.057-5.166 7.057h-14.82c-3.898 0-7.904-3.16-8.948-7.057L5.396 5.5m8.872 0l3.322 12.401"></svg:path><svg:circle cx="33.758" cy="31.208" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsJonkopingsLanstrafikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoomIcon],svg[arcticons-joom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="16.227" cy="38.027" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.433" ry="5.414"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.621 43.5V16.89c0-7.758 6.855-12.266 11.551-12.39l.034 26.813c.012 9.423-8.289 12.18-11.585 12.187"></svg:path>`,
})
export class ArcticonsJoomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoplinIcon],svg[arcticons-joplin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.432 4.494H24.009L24 9.972h2.479a.996.996 0 0 1 1 .995c.002 3.766.008 17.169.008 21.825c0 2.461-1.815 3.432-3.791 3.432c-2.418 0-7.252-1.977-7.252-5.546a3.974 3.974 0 0 1 4.234-4.27a6.5 6.5 0 0 1 3.295 1.057v-7.169a14.7 14.7 0 0 0-4.476-.654c-5.862 0-9.929 4.904-9.929 11.156c0 6.897 5.272 12.708 14.579 12.708c5.665 0 10.807-3.848 10.807-10.77V10.972a1 1 0 0 1 1-1h2.478Z"></svg:path>`,
})
export class ArcticonsJoplinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJornadaDoEstudanteIcon],svg[arcticons-jornada-do-estudante-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.669 10.345a5.846 5.846 0 0 1-5.846 5.845h-.001a5.845 5.845 0 0 1-5.846-5.845h0A5.846 5.846 0 0 1 32.822 4.5h0a5.846 5.846 0 0 1 5.847 5.844zm-18.434 6.367a4.86 4.86 0 0 1-4.86 4.86h0a4.86 4.86 0 0 1-4.86-4.86h0a4.86 4.86 0 0 1 4.86-4.86h0a4.86 4.86 0 0 1 4.86 4.86m-3.857 14.493a3.523 3.523 0 0 1-3.523 3.522h0a3.52 3.52 0 0 1-3.524-3.521v-.001a3.52 3.52 0 0 1 3.522-3.523h.002a3.52 3.52 0 0 1 3.523 3.522zm8.145 9.174a3.12 3.12 0 0 1-3.122 3.121H21.4a3.122 3.122 0 0 1-.001-6.243h.001a3.12 3.12 0 0 1 3.122 3.121v.001zm-4.034-23.651c2.097-1.587 4.626-2.604 7.32-2.8m-12.137-2.326c3.307-3.01 7.62-4.77 11.868-4.434M14.846 27.97a13.5 13.5 0 0 1 1.468-6.248m-5.967 6.636c-.87-3.289-.624-6.518.406-9.426m8.252 19.138c-1.352-1.554-2.342-3.15-3.017-4.743m2.21 6.145c-1.844-1.475-3.345-3.004-4.54-4.559"></svg:path>`,
})
export class ArcticonsJornadaDoEstudanteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJotatexteditorIcon],svg[arcticons-jotatexteditor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.73 4.5v39h24.73a2 2 0 0 0 2-2V17.32L45.07 11A1 1 0 0 0 45 9.63l-1.77-1.57a1 1 0 0 0-1.39.08l-2.38 2.68V6.5a2 2 0 0 0-2-2ZM32 19.18l3.23 2.87l-3.77 4.24l-3 3.35l-2.4 2.7l-2.49 2.81l-5.67 3.18l2.49-6l2.49-2.8h0l5.39-6l.24-.28Zm7.46-8.36l-7.43 8.36m3.23 2.87l4.2-4.73M8.4 6.45v35.1a2 2 0 0 0 1.95 2h2.38V4.5h-2.38A2 2 0 0 0 8.4 6.45"></svg:path>`,
})
export class ArcticonsJotatexteditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJottacloudIcon],svg[arcticons-jottacloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.056 5.5H42.5v24a13 13 0 0 1-13 13h-3.444h0v-24a13 13 0 0 1 13-13M5.5 26.056h3.444a13 13 0 0 1 13 13V42.5h0H18.5a13 13 0 0 1-13-13z"></svg:path>`,
})
export class ArcticonsJottacloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJournalItIcon],svg[arcticons-journal-it-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36 38.577H11.16a1.404 1.404 0 0 1-1.404-1.405V5.904c0-.775.628-1.404 1.404-1.404h24.842a2.245 2.245 0 0 1 2.244 2.245v29.587a2.245 2.245 0 0 1-2.244 2.245M13.571 4.5v34.077M25.859 4.504v20.218m6.678-.064V4.504m-6.678 8.867H19.56m6.299 8.165H19.56m6.299-4.083H19.56"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.51 25.942a3.617 3.617 0 0 0-5.074-.658l-.117.09l-.117-.09a3.617 3.617 0 1 0-4.415 5.73l4.532 3.493l4.532-3.492a3.617 3.617 0 0 0 .658-5.074m-2.498 12.636V43.5l-2.744-1.533l-2.743 1.533v-4.923"></svg:path>`,
})
export class ArcticonsJournalItIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJourneyIcon],svg[arcticons-journey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.139 42.5H7.86a2.07 2.07 0 0 1-2.069-2.07V17.78a2.07 2.07 0 0 1 2.07-2.069h32.277a2.07 2.07 0 0 1 2.069 2.07v22.65a2.07 2.07 0 0 1-2.07 2.069"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.502 29.411v-7.886h8.285m6.212 15.129h8.324V28.7M8.462 15.713v-3.651a2.02 2.02 0 0 1 2.015-2.015h27.046a2.02 2.02 0 0 1 2.015 2.015v3.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.519 10.047V7.515A2.02 2.02 0 0 1 13.534 5.5h20.932a2.02 2.02 0 0 1 2.015 2.015v2.532"></svg:path>`,
})
export class ArcticonsJourneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJournieIcon],svg[arcticons-journie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.21 10.784q.538.442 1.041.946c5.665 5.665 5.665 14.851 0 20.516h0L24.993 42.504l-1.985-1.985m-3.144-13.401a7.253 7.253 0 0 1 9.17-11.155"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="m23.007 30.261l-3.144-3.144"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.265 30.261L23.007 40.519L12.749 30.261c-5.665-5.665-5.665-14.851 0-20.516s14.85-5.665 20.516 0s5.665 14.851 0 20.516"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.136 25.132l-5.13 5.13l-5.128-5.13a7.253 7.253 0 1 1 10.258 0"></svg:path>`,
})
export class ArcticonsJournieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoviIcon],svg[arcticons-jovi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.021 18.149l3.431 3.806h8.029M15.587 38.68l5.882-10.127h3.427l6.631 7.263m-2.554-18.067h5.439v9.135h-5.439"></svg:path><svg:circle cx="23.763" cy="13.251" r="4.159" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsJoviIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoyceIcon],svg[arcticons-joyce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15.691" cy="14.661" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.845" cy="14.661" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.155" cy="14.661" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.309" cy="14.661" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.691" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.845" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="18.796" r=".7" fill="currentColor"></svg:circle><svg:circle cx="28.155" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.309" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.464" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.536" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.691" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.845" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="22.932" r=".7" fill="currentColor"></svg:circle><svg:circle cx="28.155" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.309" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.464" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.536" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.691" cy="27.068" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.845" cy="27.068" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="27.068" r=".7" fill="currentColor"></svg:circle><svg:circle cx="28.155" cy="27.068" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.309" cy="27.068" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.845" cy="31.204" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="31.204" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.155" cy="31.204" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="35.339" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsJoyceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoynIcon],svg[arcticons-joyn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:circle cx="18.257" cy="21.386" r="3.637" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 17.75h2.967v9.762A2.764 2.764 0 0 1 9.5 30.287M24.334 17.75v5.152c0 1.451 2.107 3.94 5.456 1.116"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.79 17.75v9.857c0 3.637-5.456 3.063-5.456.479m8.328-10.337v7.557m0-4.686c1.531-2.87 5.838-4.306 5.838-1.052v5.738"></svg:path>`,
})
export class ArcticonsJoynIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoyrideSuperappIcon],svg[arcticons-joyride-superapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.002 9.235c-2.975-2.555-4.862 2.577-.097 4.399m2.588 19.546l-1.37-9.197c-4.517-.205-9.54-3.708-5.358-9.239l1.725 4.851l5.358-.032m7.957 13.649c1.488 0 2.695 1.38 2.695 3.072c0 1.704-1.207 3.083-2.695 3.083s-2.695-1.38-2.695-3.083c0-1.692 1.207-3.072 2.695-3.072M21.499 9.688c-2.89-3.396-5.466 3.45-.097 4.183M19.106 17.6l1.056 8l-5.401-5.95l2.62-3.903m-.119 15.848c1.833 0 3.32 1.768 3.32 3.935c0 2.177-1.487 3.934-3.32 3.934c-1.822 0-3.31-1.757-3.31-3.934c0-2.168 1.488-3.936 3.31-3.936M5.5 31.595l12.193.075m-6.921 4.41h9.616"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.077 33.815l12.085-.043c1.218 3.137 1.79 3.666 3.353 3.526m-6.081-7.87l6.641-.216"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.347 18.636c.659-.592 1.702-.7 2.33-.24c.63.46.606 1.312-.053 1.904a2.1 2.1 0 0 1-1.382.524l1.994 10.587c0 9.132-6.889 6.372-12.818 5.897l.949-10.673l-7.364.334m17.368-6.026l4.82 9.131m-12.237-2.781l1.218-3.396m3.299 11.439l4.216-.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.236 31.886q.097 5.961 1.09 5.886"></svg:path>`,
})
export class ArcticonsJoyrideSuperappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJrIcon],svg[arcticons-jr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.438 26.2v3.653c0 1.196.97 2.165 2.165 2.165h6.935c1.195 0 2.165-.97 2.165-2.165V17.327H34.1c1.189 0 2.152.963 2.152 2.152v2.816a2.15 2.15 0 0 1-2.152 2.152h-3.64l5.978 7.571"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path>`,
})
export class ArcticonsJrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJreBankIcon],svg[arcticons-jre-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.34 19.001C8.58 23.784 10.218 29.9 15 32.661c4.783 2.761 10.9 1.123 13.66-3.66c2.762-4.783 1.123-10.899-3.66-13.66S14.102 14.218 11.34 19"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.96 34.96a15.5 15.5 0 1 1 0-21.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 24c-4.748-1.582-7.862-6.773-12.58-11M43.5 24c-4.748 1.582-7.862 6.773-12.58 11m-21.825-.018c7.08 3.454 15.627.841 19.566-5.981m2.245-15.983C23.826 9.564 15.28 12.177 11.34 19m9.445 5c1.332 0 2.412 1.07 2.412 2.39s-1.08 2.39-2.412 2.39h-3.98v-9.56h3.98c1.332 0 2.412 1.07 2.412 2.39S22.117 24 20.785 24m0 0h-3.98"></svg:path>`,
})
export class ArcticonsJreBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJrePointIcon],svg[arcticons-jre-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.94 13.02c-4.413-4.413-11.08-5.74-16.872-3.34a15.5 15.5 0 0 0 0 28.64c5.792 2.399 12.459 1.073 16.872-3.34c4.698-4.207 7.812-9.4 12.56-10.98c-4.748-1.582-7.862-6.774-12.56-10.98"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.033 14.178a9.89 9.89 0 0 0-9.443 6.982h18.895a9.89 9.89 0 0 0-9.452-6.982M10.556 26.84a9.89 9.89 0 0 0 9.477 7.121a9.89 9.89 0 0 0 9.477-7.121z"></svg:path>`,
})
export class ArcticonsJrePointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJrpn15cIcon],svg[arcticons-jrpn15c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="16.957" r="12.457"></svg:circle><svg:circle cx="29.098" cy="23.177" r="2.206"></svg:circle><svg:path d="m15.37 36.563l1.982-1.09V43.5m17.593-2.772a2.664 2.664 0 0 1-2.676 2.676h0c-1.486 0-2.676-1.19-2.676-2.577v-2.675c0-1.487 1.19-2.676 2.676-2.577h0a2.56 2.56 0 0 1 2.577 2.577h0m-13.702 4.555c.595.496 1.09.694 2.379.694h.198a2.2 2.2 0 0 0 2.18-2.18h0a2.2 2.2 0 0 0-2.18-2.18h-2.676v-3.469h4.856"></svg:path></svg:g>`,
})
export class ArcticonsJrpn15cIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJrpn16cIcon],svg[arcticons-jrpn16c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="16.926" r="12.426"></svg:circle><svg:circle cx="29.085" cy="23.131" r="2.201"></svg:circle><svg:path d="m15.392 36.484l1.977-1.087v8.007m17.549-2.765a2.66 2.66 0 0 1-2.67 2.669h0c-1.482 0-2.668-1.186-2.668-2.57v-2.67c0-1.482 1.186-2.668 2.669-2.57h0a2.55 2.55 0 0 1 2.57 2.57h0"></svg:path><svg:circle cx="23.772" cy="40.831" r="2.669"></svg:circle><svg:path d="M26.145 36.482c-.396-.593-1.088-.989-2.175-.989h-.198c-1.483 0-2.669 1.186-2.669 2.57v2.768"></svg:path></svg:g>`,
})
export class ArcticonsJrpn16cIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJsDictIcon],svg[arcticons-js-dict-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.8 37.213H6.2a1.7 1.7 0 0 1-1.7-1.7V12.487c0-.939.76-1.7 1.7-1.7h35.6c.94 0 1.7.761 1.7 1.7v23.026a1.7 1.7 0 0 1-1.7 1.7M24 10.787v26.426"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.615 27.723V31.9c0 .765-.627 1.392-1.392 1.392h0A1.396 1.396 0 0 1 9.831 31.9v-.487m5.219 1.251c.348.418.766.627 1.392.627h.835c.766 0 1.392-.627 1.392-1.392h0c0-.766-.626-1.392-1.392-1.392h-.905a1.396 1.396 0 0 1-1.391-1.392h0c0-.765.626-1.391 1.392-1.391h.835c.626 0 1.044.139 1.391.626m15.171-5.977c.081 3.307-.454 5.023-3.103 6.615"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.415 20.01h9.596c-.83 1.543-1.617 2.522-2.969 3.596"></svg:path>`,
})
export class ArcticonsJsDictIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJshoIcon],svg[arcticons-jsho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 23.09v10.82c0 2.719 5.271 5.66 10.154 0m.388-17.846v10.82c0 2.719 5.271 5.66 10.154 0M16.284 22.73c1.734.763 2.802 1.914 2.802 1.914m-4.056-.268c1.735.763 2.803 1.914 2.803 1.914m14.403-15.433v8.822c0 4.182-4.744 4.14-4.744 1.373c0-3.413 5.763-1.706 10.008.374"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.236 14.727c1.893.29 4.702-.396 4.702-.396"></svg:path>`,
})
export class ArcticonsJshoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJsupdaterIcon],svg[arcticons-jsupdater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.3 21.22h-2.1a.58.58 0 0 1-.57-.47a15.7 15.7 0 0 0-2.27-5.5a.56.56 0 0 1 .07-.74L38.91 13a1.19 1.19 0 0 0 0-1.67h0l-2.24-2.24a1.19 1.19 0 0 0-1.67 0h0l-1.49 1.48a.56.56 0 0 1-.74.07a15.7 15.7 0 0 0-5.5-2.27a.58.58 0 0 1-.47-.57V5.7a1.19 1.19 0 0 0-1.19-1.2h-3.2a1.19 1.19 0 0 0-1.19 1.2h0v2.1a.58.58 0 0 1-.47.57a15.7 15.7 0 0 0-5.5 2.27a.56.56 0 0 1-.74-.07L13 9.09a1.19 1.19 0 0 0-1.67 0h0l-2.24 2.24a1.19 1.19 0 0 0 0 1.67h0l1.48 1.49a.56.56 0 0 1 .07.74a15.7 15.7 0 0 0-2.27 5.5a.58.58 0 0 1-.57.47H5.7a1.19 1.19 0 0 0-1.2 1.19v3.18a1.19 1.19 0 0 0 1.2 1.19h2.1a.58.58 0 0 1 .57.47a15.7 15.7 0 0 0 2.27 5.5a.56.56 0 0 1-.07.74L9.09 35a1.19 1.19 0 0 0 0 1.67h0l2.24 2.24a1.19 1.19 0 0 0 1.67 0h0l1.49-1.48a.56.56 0 0 1 .74-.07a15.7 15.7 0 0 0 5.5 2.27a.58.58 0 0 1 .47.57v2.1a1.19 1.19 0 0 0 1.19 1.2h3.18a1.19 1.19 0 0 0 1.19-1.2v-2.1a.58.58 0 0 1 .47-.57a15.7 15.7 0 0 0 5.5-2.27a.56.56 0 0 1 .74.07L35 38.91a1.19 1.19 0 0 0 1.67 0h0l2.24-2.24a1.19 1.19 0 0 0 0-1.67h0l-1.48-1.49a.56.56 0 0 1-.07-.74a15.7 15.7 0 0 0 2.27-5.5a.58.58 0 0 1 .57-.47h2.1a1.19 1.19 0 0 0 1.2-1.19v-3.2a1.19 1.19 0 0 0-1.2-1.19M24.4 33.14a.6.6 0 0 1-.84 0h0l-6.83-6.87a.6.6 0 0 1 0-.84l1.95-1.93a.62.62 0 0 1 .87 0h0L22 26V15.29a.6.6 0 0 1 .6-.6h2.89a.6.6 0 0 1 .59.6h0V26l2.46-2.48a.63.63 0 0 1 .87 0h0l1.81 1.92a.61.61 0 0 1 0 .86h0Zm-.4 2.91v2.21m3.3-2.67l.6 2.15m2.42-3.48l1.15 1.99m-10.75-.66l-.59 2.18m-2.45-3.52l-1.15 2M24 11.95V9.74m6.32 4l1.15-1.99m-3.58-1.52l-.56 2.19m-7.23-2.16l.58 2.16m-4.15-.67l1.15 2"></svg:path>`,
})
export class ArcticonsJsupdaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJsxIcon],svg[arcticons-jsx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.675 20v6a2 2 0 1 1-4 0v-.664m9.183 1.787c.49.639 1.106.877 1.962.877h1.184A1.996 1.996 0 0 0 26 26.004v-.009A1.996 1.996 0 0 0 24.004 24h-1.307a2 2 0 0 1-1.997-1.997c0-1.106.896-2.002 2.002-2.002h1.178c.856 0 1.47.237 1.961.876M31.025 20l2.65 3l2.65-3m0 8l-2.65-3l-2.65 3"></svg:path>`,
})
export class ArcticonsJsxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJtxBoardIcon],svg[arcticons-jtx-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-1.116 13.995l-7.799 10.334m7.799 0l-7.799-10.334"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.97 16.05v11.7c0 1.17.78 1.95 1.95 1.95h.585m-4.484-10.334h4.094m-7.869-.296v11.7a3.91 3.91 0 0 1-3.9 3.899h0c-.975 0-1.95-.39-2.73-1.17"></svg:path><svg:circle cx="17.245" cy="14.391" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsJtxBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJuegosIcon],svg[arcticons-juegos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.753 26.186V15.111m-5.537 5.537h11.075m14.831 3.598l-5.926-3.421v6.843zm-4.939-6.089l5.926 3.422v-6.843z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 33.18h6.28s4.954 5.44 8.792 5.44s4.517-3.06 4.42-5.756s-.87-12.37-1.19-16.49c-.21-2.698-2.429-6.995-8.258-6.995a8.58 8.58 0 0 0-5.948 2.361h-8.192a8.58 8.58 0 0 0-5.948-2.36c-5.829 0-8.047 4.297-8.257 6.994c-.321 4.12-1.093 13.795-1.19 16.49s.582 5.756 4.42 5.756s8.791-5.44 8.791-5.44Z"></svg:path>`,
})
export class ArcticonsJuegosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJugnooIcon],svg[arcticons-jugnoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M31.443 17.563c1.156-3.072 2.404-6.355 4.978-8.53c2.692-2.33 5.088.37 5.457 2.72"></svg:path><svg:path d="M41.878 11.754c.384 2.721-.841 4.72-2.75 6.795a29.5 29.5 0 0 1-8.933 5.946c-6.599 2.64-14.613 2.734-20.725-1.209c-1.917-1.379-4.14-2.979-4.487-5.495c-.626-6.697 7.417-7.597 12.133-6.794c5.273.81 10.635 2.76 14.402 6.672c.46.563.863 1.174 1.186 1.826"></svg:path><svg:path d="M29.787 21.465c-4.356-4.022-10.105-7.353-16.234-6.729c-1.847.045-3.944.797-4.002 2.946c-.065 2.38 2.35 3.693 4.252 4.495c5.11 2.112 11.005 1.438 15.984-.712m1.656-3.902c.913-2.638 2.762-4.95 4.992-6.605c2.293-1.539 3.622.629 3.16 2.54c-1.082 3.296-5.02 5.216-6.891 5.997M18.2 26.45c-1.204 5.766 1.354 12.365 6.974 14.75c3.287 1.32 7.306 1.416 10.398-1.112c5.322-5.38 2.772-12.582-.802-17.866"></svg:path><svg:path d="M18.2 26.45c.36 4.47 2.123 8.929 5.949 11.518c3.468 2.372 9.147 1.138 10.664-2.974c1.492-4.552-1.078-7.822-2.98-10.978"></svg:path></svg:g>`,
})
export class ArcticonsJugnooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJuicesshIcon],svg[arcticons-juicessh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="20.63" cy="23.24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="18.48" ry="14.02" transform="rotate(-64.44 20.63 23.233)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.47 25.67l-6.81 14.24M28.6 6.57l-6.81 14.24m-3.22 3.15L5.74 28.5m29.79-10.52l-12.84 4.53m-3.76-.08L7.98 17.19m25.3 12.1l-10.95-5.24m-2.46-2.97l-4.5-12.74m10.52 29.79L21.36 25.3"></svg:path><svg:ellipse cx="20.63" cy="23.24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.7" ry="1.88" transform="rotate(-64.44 20.63 23.233)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.47 25.67c-.51 1.07-3.93 2-4.52 3.22a1.24 1.24 0 0 0 .66 1.87a1.29 1.29 0 0 0 1.78-.76"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.6 6.57c11.14 5.33 16.6 17.11 12.2 26.31s-17 12.35-28.14 7"></svg:path>`,
})
export class ArcticonsJuicesshIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJujutsuKaisenPhantomParadeIcon],svg[arcticons-jujutsu-kaisen-phantom-parade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path d="m21.89 30.934l.707-.016l2.914.48l.663-.09m.015-2.821l-.54.766m.626-3.777c.238-.765 1.48-2.188 2.083-2.786c1.534-.553 3.787-1.514 4.526-1.562m-8.06 1.629c-1.811-1.14-2.972-2.318-4.876-3.478M18.54 23.92l.17.561l1.593.884m11.272.405l-.358.442l-1.426.254M25.95 16.035l-1.02 2.813c1.55-1.067 3.055-2.465 3.953-4.059m-5.635-.284c-.8.895-1.408 2.144-1.503 3.306c1.452-.638 2.365-1.063 3.64-2.176m1.735 3.469c1.55-1.063 3.043-2.714 3.89-4.137m-14.886 3.751l.237.408l.327 3.464m15.029-6.785c.078 1.39-.12 2.725-.451 4.034c.69-.681 1.109-1.486 1.514-2.298m-1.798-1.239c-.058.768-.319 1.285-.502 1.927m3.698-.933c-.163 1.243-.436 1.997-1.041 2.873m-10.605-4.827c-.881.55-2.041 1.795-2.492 2.636m-.264-2.922c-.612.722-.725 2.12-.593 3.08m-1.02-3.158a13 13 0 0 1-1.084 2.475c.386-.09.626-.2 1.013-.442m-1.66-1.883c-.446.812-.699 1.657-.84 2.676M13.74 13.83c-.75.09-1.718-.075-2.375-.288c1.489-.638 1.896-1.088 2.665-1.854m1.778 4.633c-.85.453-1.528.68-2.593.932c1.41-1.299.839-1.676 1.555-2.618m-.101-3.786c-1.27-.579-2.238-1.337-2.948-2.167c1.617.552 2.5.354 3.78.508M13.77 6.058c.528.867 1.198 1.515 2.48 2m-.518-2.551c.151.664.605 1.26 1.229 1.858m17.776 11.202c-.087.783-.104 1.576-.523 2.31m5.059-3.603c-1.042-.19-1.58-.69-1.962-1.275c1.12.058 2.603-.818 3.65-1.63c-1.645.526-2.756-.755-3.43-1.628c1.176-.462 2.822-1.568 3.728-2.79c-1.638.589-3.51.289-4.976-.38c.308-.606 1.117-1.106 1.877-1.613c-1.245-.197-2.431-.117-3.286.23m2.056 8.848c.62.872 1.125 1.647 2.087 2.292c-1.117-.04-1.886-.168-2.592-.719m-.612 2.765c-.19-.589-.039-1.178.05-1.766c.496.532 1.234.862 2.201 1.064M36.37 5.715c-.381.77-1.22 1.723-1.908 2.122m-17.63 13.909c.363-.994.519-2.025 1.242-2.996"></svg:path><svg:path d="m16.433 24.062l.589 3.856l4.815 6.259c.214.279.597.391.945.452l1.113.195c.41.072.958-.005 1.282-.268l4.626-3.757c.515-.418.96-.795 1.158-1.43c.633-2.034 1.803-4.025 3.224-6.914m-17.634 2.407l-1.112-.776l-1.502-2.868c-.248-.473-.282-1.567-.282-1.567c.159-.502.436-1.026.82-1.549m1.824 6.662c-.401 1.221-.655 1.703-1.406 2.361M35.137 42.37c-3.165-2.554-8.937-6.05-10.928-3.815l-1.438-.686l-.848.006c-1.727-.925-2.797-.622-4.117-.86L5.812 30.002m31.514 1.49c1.2 1.323 1.89 2.548 1.87 4.944l-.038 4.171l.547 1.529m-2.655-4.661c-.25 1.641-.59 3.278-1.267 4.917M33.92 25.65c.994 1.467 1.99 3.018 2.426 4.696c-.492 2.295-1.915 3.78-3.74 5.639l-.863 2.448"></svg:path><svg:path d="M21.17 36.067c4.302-.25 9.6-1.384 11.098-3.63m-10.98 3.526c-6.61-5.633-8.996-9.54-14.03-15.182M5.802 18.09c2.113-1.216 4.583-1.789 7.07-2.08m-.18 7.377l.446 1.406c1.21 1.623 2.084 2.832 3.143 4.139"></svg:path></svg:g>`,
})
export class ArcticonsJujutsuKaisenPhantomParadeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJujutsuKaisenPhantomParadeAltIcon],svg[arcticons-jujutsu-kaisen-phantom-parade-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.976 25.764c.727-1.032 2.044-1.026 3.34-1.054m-4.788-2.567l5.059.759l-1.393-2.977l2.353.278m.23-1.802l-.136-.57l2.012.867l-.5-2.336l1.851.767l-.274-1.231l2.488.222l.088-1.122l1.067-.002m1.412-.43l1.368.696m1.137-.055l-.156-1.308l1.077 1.056l.153-.79m1.849 1.562l1.156-1.749m1.127.68v1.139l.884-.718l.089 1.21l3.438 6.65l.055 4.305l1.158 4.658l-2.746 9.072m-2.17 1.538l-3.786 1.06m-1.694-.082c-2.986-1.144-5.136-2.204-7.34-3.462l-1.752-2.59m11.304 2.184c.266-.848 1.32-1.362 2.79-1.856m.39-12.914c-.393 1.369-.103 3.203.767 4.574m-16.031 8.295c-5.152.109-6.01-4.001-5.3-6.993h1.082l2.56 2.725c-.402-2.315-1.28-4.875-.818-6.746m3.279 2.181c.002 1.2.524 2.162 1.584 2.894m9.889-13.268l.171 1.275m-1.091 2.981c-.178-1.652-1.051-2.16-1.814-1.809l-.121-1.786m4.693 2.425c-.225-.502-.245-1.401.515-1.61l-.306-1.363m-4.41 11.772c3.729-.628 1.681-2.559 4.055-3.435m-.086 13.404l-.02.788m2.116-1.268l-.042.672M19.081 29.893c.206 1.305.47 2.685 1.896 3.56m-.643-.384l.115 2.285l4.001 3.988c1.995.982 4.613 2.212 7.004 2.164m7.552-18.346l2.47-7.032m-1.172-1.398l-.118 2.342M14.093 29.819l-1.274 1.313l-.133-2.001c-.754 1.618-2.125 2.832-4.008 3.339l1.024-2.092c-1.008.332-2.164.454-2.568-.425l2.279-2.797m-2.845 1.691l1.64-2.842c-.158-.193-.716-.378-1.168-.326l1.469-1.63c-.081-.69-.879-1.117-1.986-1.558c.694-.775 1.487-1.57 2.625-2.12m.614.365c-1.565-1.37-2.402-2.972-2.786-4.785c1.534.71 2.973 1.045 4.602.277c-.786-.857-2.156-1.097-3.238-1.092c.793-.97 2.293-1.6 4.148-.537c-.52-.744-1.127-1.547-.729-2.387l1.739 1.306c-.542-1.48-.657-2.834.006-4.177c.777.708 1.167 1.04 2.012 1.309m23.852 5.576c.396-1.933.428-3.835.132-5.71l-1.31 1.792c-.419-1.449-.629-3.08-1.611-4.034l-1.497 2.31M18.939 8.4c.332-.91 1.026-1.618 2.075-2.042c-.22.61-.351 1.221-.213 1.832M15.89 9.517l.07-.589l1.016.527c-.213-.746-.175-1.423-.009-2.18c.684.134 1.246.622 1.633 1.162m3.943-.444c.651-.998.954-2.344.173-3.564c1.146.177 2.751 1.446 3.141 3.19m1.323-.151c.23-.626.512-1.261.67-1.909c.502.228 1.065.908.921 1.73m3.867.513c.27-.61.387-1.303.464-2.02c.742 1.008 1.259 2.15.912 3.385m-20.88 24.69l-.662-.19l.18-.566l-.366-.67"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.48 11.552l-.412.332c-4.943.19-7.71.441-12.993 2.113l-2.343-1.47l-1.652-2.255c-.446-.609.678-1.674 1.429-1.758L31.215 7.08c1.626.683 2.872 2.314 3.827 3.708m-12 .149l-1.986-2.368m-5.813 19.058l.543 1.079l-.062.73"></svg:path><svg:g fill="currentColor" stroke-width="0"><svg:circle cx="33.766" cy="32.643" r=".75"></svg:circle><svg:circle cx="35.662" cy="32.186" r=".75"></svg:circle></svg:g>`,
})
export class ArcticonsJujutsuKaisenPhantomParadeAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJuliansEditorIcon],svg[arcticons-julians-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.502 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path d="m36.85 42.5l.943-1.517l.462-7.046c.054-.832-1.404-1.74-2.127-1.322l-6.114 3.532l-3.95 6.353m8.766-9.136l3.328 2.07m-7.948.6l7.597 4.723"></svg:path><svg:path d="M37.352 32.744a15.24 15.24 0 0 0 1.548-6.716c0-8.45-6.85-15.301-15.302-15.301S8.296 17.577 8.296 26.028c0 4.289 1.765 8.166 4.607 10.944l-1.073 5.527"></svg:path><svg:path d="M5.498 32.259c.945-.628 2.284-1.039 3.627-1.252M27.306 16.57c5.166 1.24 8.39 6.14 7.227 10.989l-.466 1.942c-1.163 4.848-6.258 7.754-11.425 6.515s-8.39-6.14-7.227-10.989l.466-1.941c1.163-4.849 6.258-7.755 11.425-6.516"></svg:path><svg:path d="m22.624 22.376l.374.09c.808.193 1.303 1 1.109 1.808l-.336 1.4c-.194.807-1 1.302-1.808 1.108l-.375-.09a1.497 1.497 0 0 1-1.108-1.808l.335-1.4c.194-.808 1-1.302 1.809-1.108m6.852 1.644l.375.09c.808.193 1.303 1 1.109 1.808l-.336 1.399c-.194.808-1 1.302-1.808 1.109l-.375-.09a1.497 1.497 0 0 1-1.109-1.809l.336-1.399c.194-.808 1-1.303 1.808-1.109"></svg:path></svg:g>`,
})
export class ArcticonsJuliansEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJumboExtrasIcon],svg[arcticons-jumbo-extras-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 33.467l19.108-3.446c2.244 2.189 2.327 5.334 1.541 8.81c4.991-2.579 6.064-5.518 6.008-10.172L42.5 26.794m-30.084-6.565l5.179 5.484m-1.074-6.196l-3.031 6.907m11.028-1.91l-1.074-6.196l2.029-.352c1.146-.198 2.237.572 2.436 1.721s-.569 2.242-1.715 2.44l-2.029.352m2.029-.351l2.38 1.681m-10.755-4.516l4.105-.712m-.979 6.552l-1.074-6.196m16.309 2.856c.466.43.975.53 1.637.416l.918-.159a1.57 1.57 0 0 0 1.277-1.813v-.007a1.57 1.57 0 0 0-1.814-1.278l-1.012.175a1.57 1.57 0 0 1-1.815-1.279h0a1.574 1.574 0 0 1 1.281-1.819l.913-.158c.662-.115 1.17-.013 1.636.416M8.285 24.136l2.019-.35m1.615 2.911l-3.097.536l-1.074-6.195l3.098-.537m22.634-2.38c.355-.26.316-.68.283-.872l-.088-.507"></svg:path><svg:circle cx="33.44" cy="16.742" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.065 20.918l-2.745.476m-.324 2.17l.979-6.551l3.126 5.84"></svg:path>`,
})
export class ArcticonsJumboExtrasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJumboPrivacyIcon],svg[arcticons-jumbo-privacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.038 40.043a4.3 4.3 0 0 1-.856.907c-2.754 2.09-5.871 2.2-8.223 2.2a2.048 2.048 0 0 1-2.346-2.098a1.678 1.678 0 0 1 1.83-1.88c1.357 0 3.193-.287 3.193-2.372s-2.084-2.123-3.442-2.123h-5.848M8.331 9.278a27.23 27.23 0 0 1 14.283-3.823c-.612 3.213-1.53 3.366-1.53 3.366s3.111-1.938 8.517-1.224a5.1 5.1 0 0 1-2.397 3.264s7.038.408 7.7 9.843a59 59 0 0 1 .1 6.52"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.543 12.823c3.464-.674 11.42-.942 11.42 8.123a15.26 15.26 0 0 1-5.392 12.185"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.68 28.641c2.095-1.384 3.304-3.632 3.304-7.121c0-3.825-3.884-4.686-4.83-4.676M20.919 31.041c.115 1.014 1.568 3.117 3.385.86m-9.316-10.644c.402-.574 1.855-1.664 3.27.363m11.23-.008c-.44-.707-1.664-1.797-3.27.306"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.11 39.509c4.607-1.973 10.937-7.257 11.42-11.028c.593-4.628-4.561-7.363-6.646-7.166c-2.416.227-6.699 7.407-9.759 10.9m30.298 10.594s-.087.048-1.245-1.36C31.412 39.3 24.162 29.6 23.583 27.793a3.54 3.54 0 0 1 1.734-4.106c1.122-.637 4.54-3.009 6.4-1.657c1.718 1.247 5.518 9.949 7.278 15.385c.547 1.688.491 1.498.491 1.498"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.903 22.455c-.017.652 1.532 2.354 3.788.71c-.038 1.606 1.32 2.715 3.29 2.237c-.192 1.683-.303 3.066 1.388 3.847m3.12-1.819c1.19.248 3.371-.288 2.568-3.023a2.035 2.035 0 0 0 3.347-1.32c1.147 1.32 2.216 1.593 3.623.548"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsJumboPrivacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJumiaIcon],svg[arcticons-jumia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 7.783l4.944 10.018L40 19.408l-8 7.798l1.889 11.011L24 33.018l-9.889 5.199L16 27.206l-8-7.798l11.056-1.607z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsJumiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJumpRopeTrainingProIcon],svg[arcticons-jump-rope-training-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.902 18.598v14.098m28.196-14.098v14.098"></svg:path><svg:circle cx="24" cy="18.598" r="14.098" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="18.598" r="9.078" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="18.598" r="4.058" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.532 32.696h4.74v8.435a2.37 2.37 0 0 1-2.37 2.369h0a2.37 2.37 0 0 1-2.37-2.37zm28.197 0h4.739v8.435a2.37 2.37 0 0 1-2.37 2.369h0a2.37 2.37 0 0 1-2.37-2.37z"></svg:path>`,
})
export class ArcticonsJumpRopeTrainingProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJumpplusIcon],svg[arcticons-jumpplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.021 39.422C.93 31.564.287 18.79 7.548 10.159c7.26-8.63 19.957-10.183 29.084-3.556c9.126 6.628 11.58 19.18 5.62 28.756c-5.96 9.575-18.307 12.917-28.283 7.655M9.02 39.422L6.06 44.55l7.907-1.534m6.006-5.844h8.053M24 33.146v8.052M5.084 20.178h5.282m13.004 0h5.512m3.688 0h6.03M5.035 23.086h5.33"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.99 28.904h5.376l2.464-2.51V22.73m10.59 6.174h5.462l2.465-2.51v-3.311m2.416 5.821h5.613l2.465-2.51v-2.65m-26.769 1.499h5.34l.924 1.034l-1.31 1.156m-4.022-3.457l1.667 5.081"></svg:path><svg:circle cx="12.781" cy="20.156" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.586" cy="20.156" r=".75" fill="currentColor"></svg:circle><svg:ellipse cx="41.844" cy="20.365" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.428" ry="1.454"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.53 9.317v3.481s.022.692-.685.692h-.358m-1.445-3.43s.157 1.77-.698 2.635m5.265-2.715l.692 2.61m-.793 1.67s-.93 1.389-4.498 1.389m9.404-6.332s-.184 1.479-1.176 2.058m.917-.953h4.57m.055 2.135h-4.659v1.528m-1.057.586h6.217m-2.553-4.193v5.288"></svg:path>`,
})
export class ArcticonsJumpplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJunoIcon],svg[arcticons-juno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.942 13.5a5.85 5.85 0 0 1 5.336 5.84v9.297a5.85 5.85 0 0 1-5.863 5.863h-.86a5.85 5.85 0 0 1-5.833-5.265"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsJunoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJupiterIcon],svg[arcticons-jupiter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.104 4.5h7.456v39H13.44V25.789h7.37v9.807h-4.52v3.161h10.695z"></svg:path>`,
})
export class ArcticonsJupiterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJustCraigslistIcon],svg[arcticons-just-craigslist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5C12.145 2.5 2.5 12.145 2.5 24S12.145 45.5 24 45.5S45.5 35.853 45.5 24S35.855 2.5 24 2.5m0 0v43M8.819 39.209L24 24m15.181 15.209L24 24"></svg:path>`,
})
export class ArcticonsJustCraigslistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJustDanceNowIcon],svg[arcticons-just-dance-now-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.824 34.918a1.978 1.978 0 1 0 3.954 0v-2.015a2.006 2.006 0 0 0-2.015-2.014a1.944 1.944 0 0 0-1.94 2.014ZM43.5 28.949l-3.965 7.983l-.02-5.969l-2.965 5.969l-.02-5.969m-11.414 5.969v-5.969l3.954 5.969v-5.969m-7.261-1.99v-7.957l5.272 7.958V11.068m-16.612 0v5.272a2.655 2.655 0 0 0 2.586 2.686a2.655 2.655 0 0 0 2.586-2.686v-5.272m18.802 15.22a2.676 2.676 0 0 1-2.666 2.686h-.02a2.676 2.676 0 0 1-2.686-2.666v-2.706a2.676 2.676 0 0 1 2.666-2.686h.02a2.59 2.59 0 0 1 2.586 2.686h0M17.73 18.131a2.37 2.37 0 0 0 1.99.895h1.194a1.995 1.995 0 0 0 1.99-1.99h0a1.995 1.995 0 0 0-1.99-1.989H19.62a1.995 1.995 0 0 1-1.989-1.99h0a1.995 1.995 0 0 1 1.99-1.99h1.193a2.14 2.14 0 0 1 1.99.896m-8.157 17.01h4.973m.2 2.488V21.016l-7.91 11.937m12.484-21.885h5.273M8.678 28.974v-7.958h1.293a3.99 3.99 0 0 1 3.979 3.979h0a3.99 3.99 0 0 1-3.98 3.979Zm31.833-7.958h-3.98v7.958h3.98m-3.98-3.98h2.587M4.5 11.069h3.98v5.969a1.995 1.995 0 0 1-1.99 1.99h0a1.995 1.995 0 0 1-1.99-1.99v-.697"></svg:path>`,
})
export class ArcticonsJustDanceNowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJustEatIcon],svg[arcticons-just-eat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.84 5.79a2.45 2.45 0 0 1 2.32 0a32 32 0 0 1 8.12 6.52A65 65 0 0 1 42 24.06a.79.79 0 0 1-.58 1.18l-3.42.43a.66.66 0 0 0-.57.65v6.39c0 1.86-.6 7-.85 9a.9.9 0 0 1-.91.81H12.29a.9.9 0 0 1-.91-.81c-.25-2-.85-7.12-.85-9v-6.39a.66.66 0 0 0-.57-.65l-3.35-.43A.79.79 0 0 1 6 24.06a65 65 0 0 1 8.69-11.75a32 32 0 0 1 8.15-6.52"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.83 42.5c.6-4.15 1.27-19.35 1.27-24.27c0 0-5.64 6.41-5.7 12.88v2.7a1.57 1.57 0 0 0 1.39 1.56l3.61.44M19.33 19.58a207 207 0 0 0 0 22.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.17 19.44c-.3 3.71-.55 10.12-.22 12.25c.36 2.31 3.1 2.3 3.1 2.3m3.37-14.41c-.09 3.38-.29 10.73-.27 12.11c0 2.1-3.1 2.3-3.1 2.3"></svg:path>`,
})
export class ArcticonsJustEatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJust24hoursIcon],svg[arcticons-just24hours-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.21 32.84V14.76l-6.75 8.56l-.72.84l-2.17 2.77H37.5m-27-6.14a6 6 0 0 1 6-6a6 6 0 0 1 6 6A5.33 5.33 0 0 1 20.75 25c-2.42 2.16-10.25 7.83-10.25 7.83h11.93"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsJust24hoursIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJustanotherworkouttimerIcon],svg[arcticons-justanotherworkouttimer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.315 5.507l2.369 2.369L7.866 23.694l-2.37-2.369zm18.82 18.802l2.369 2.369l-15.818 15.818l-2.37-2.37zM16.101 5.964l2.37 2.368L8.322 18.48l-2.369-2.368zM39.67 29.515l2.368 2.369L31.89 42.03l-2.369-2.369zm-7.45 2.705L15.78 15.78m21.18 21.18l2.84 2.84M11.04 11.04L8.2 8.2"></svg:path>`,
})
export class ArcticonsJustanotherworkouttimerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJustchessIcon],svg[arcticons-justchess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.41 10.06L28 8.44l-2.37.94l1.11-2.48l-1.28-1.64l-1.66 1.87l-.08-2.61H21.2l-.72 2.38l-1.2-2.39H15a.24.24 0 0 0-.24.3l.67 2.8l-2.33 2.5a.23.23 0 0 0 0 .26l.65 1.52l-2.63 4.35a.25.25 0 0 0 .05.32l3.77 3a.26.26 0 0 0 .29 0l4.69-3.85a.9.9 0 0 1 .6-.2a.94.94 0 0 1 .87.4a1.68 1.68 0 0 1-.13 1.2S16 29.82 15.77 30.43c-.8.39-1.23.85-1.23 1.32a1.17 1.17 0 0 0 .43.79l-.36.94v5.26a.24.24 0 0 0 .25.25l7-.38m7.55-28.55a6.6 6.6 0 0 0-4.33 11.58c-.44.24-.67.52-.67.8s.24.57.69.81A28.8 28.8 0 0 1 23.16 32c-.79.39-1.22.85-1.22 1.32a1.1 1.1 0 0 0 .43.79l-.51 1.31v3.88h0c.11 3 3.45 4.23 7.54 4.23s7.42-1.18 7.53-4.23h0v-3.91c-.25-.39-.46-.78-.67-1.16a1.3 1.3 0 0 0 .6-.94c0-.57-.63-1.12-1.77-1.55a23.4 23.4 0 0 1-1.4-8.48c.45-.25.69-.53.7-.82s-.24-.56-.68-.8a6.6 6.6 0 0 0-4.32-11.58Zm0 0"></svg:path><svg:path fill="currentColor" d="M16.61 10.1a.72.72 0 1 1 0 1.44a.72.72 0 0 1 0-1.44"></svg:path>`,
})
export class ArcticonsJustchessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJustdialIcon],svg[arcticons-justdial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.6 15.9v12.15a4.05 4.05 0 0 1-4.05 4.05h0a4.05 4.05 0 0 1-4.05-4.05v-1.345m21-1.287a4.05 4.05 0 0 0-4.05-4.05h0a4.05 4.05 0 0 0-4.05 4.05v2.632a4.05 4.05 0 0 0 4.05 4.05h0a4.05 4.05 0 0 0 4.05-4.05m0 4.051V15.899"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsJustdialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJustnotesIcon],svg[arcticons-justnotes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.247 40.589l-7.71-.038l-.037-7.71L30.318 8.025a2.09 2.09 0 0 1 2.957 0l4.79 4.79c.816.816.816 2.14 0 2.957zm12.06-27.555l7.747 7.747m-8.232.486L10.086 36.002M42.5 32.466H30.506l-8.417 8.085H42.5z"></svg:path>`,
})
export class ArcticonsJustnotesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJustserveIcon],svg[arcticons-justserve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.616 15.693c2.431-1.421 5.31-2.763 8.187-2.006c5.141 1.357 6.938 7.744 4.246 12.052c-5.247 7.227-13.479 11.272-20.363 16.233C8.384 38.594 3.505 31.188 3.505 22.995C3.505 11.676 12.68 2.5 24 2.5s20.495 9.176 20.495 20.495c0 8.212-4.901 15.63-12.19 19.027c-6.844-4.93-15.107-9.006-20.354-16.233c-2.692-4.308-.895-10.695 4.246-12.052c2.878-.757 5.004.53 7.435 1.951"></svg:path>`,
})
export class ArcticonsJustserveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJustwatchIcon],svg[arcticons-justwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.483 40.034l-5.698 3.284a1.372 1.372 0 0 1-2.053-1.191v-6.57zm0-10.696l-7.741 4.476v-8.953zm0-10.676l-7.741 4.477v-8.953zm0-10.695L8.795 4.682a1.372 1.372 0 0 0-2.053 1.191v6.57zm19.809 21.371l-7.751 4.476v-8.953zm0-10.676l-7.751 4.477v-8.953zM24.318 24l-7.752 4.477v-8.954zm0-10.676l-7.752 4.457V8.848zm0 21.352l-7.752-4.457v8.933zM42.915 24.59l-6.72 3.877v-8.953l6.72 3.875c.47.28.47.942 0 1.202"></svg:path>`,
})
export class ArcticonsJustwatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJuzdanIcon],svg[arcticons-juzdan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.175 12v12.972c0 1.44-.005 2.892-.277 4.306c-.273 1.415-.831 2.792-1.746 3.905c-.914 1.113-2.173 1.93-3.55 2.355c-1.376.427-2.838.462-4.279.462h-.498"></svg:path><svg:ellipse cx="20.753" cy="13.868" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.928" ry="1.868"></svg:ellipse>`,
})
export class ArcticonsJuzdanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJwLibraryIcon],svg[arcticons-jw-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.824 12.433v10.258a3.415 3.415 0 0 1-3.412 3.419h0A3.415 3.415 0 0 1 12 22.69v-1.135m24-9.122L32.581 26.11l-3.419-13.677l-3.42 13.677l-3.419-13.677M8.5 29.556v6.011h3.006m1.543-6.011v6.011m7.081 0v-6.011h1.97c1.112 0 2.014.903 2.014 2.018s-.902 2.02-2.014 2.02h-1.97m1.969-.001l1.968 1.973m6.68.001v-6.011h1.968c1.113 0 2.015.903 2.015 2.018s-.902 2.02-2.015 2.02h-1.968m1.968-.001l1.968 1.973m4.817-6.01l-1.991 3.005l-1.992-3.005m1.992 6.011v-3.006m-20.354 0a1.503 1.503 0 0 1 0 3.006h-2.48v-6.011h2.48a1.503 1.503 0 0 1 0 3.005m0 0h-2.479m10.72 2.988l1.953-5.994m1.955 6.012l-1.955-6.012m1.301 4.001h-2.604"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsJwLibraryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJyotishappIcon],svg[arcticons-jyotishapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.972 34.49c.092.24 5.352 7.52 12.116 3.986c9.292-4.855 1.651-16.629-.728-20.257c-2.324-3.543-3.76-11.394 2.275-13.626c-2.989 3.46-1.189 6.305-.176 7.893c1.967 3.084 5.866 6.457 9.37 12.357c3.232 5.865 1.633 13.385-3.656 16.489c-5.59 3.28-12.579 2.76-16.745-2.205s-3.846-12.29.737-16.874c0 4.585 3.53 5.786 5.16 5.289c1.631-.498 5.432-1.323 3.035-9.324"></svg:path>`,
})
export class ArcticonsJyotishappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsJyskebankIcon],svg[arcticons-jyskebank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.984 14.081c1.37-3.299 5.647-7.536 8.951-9.06l-.03 17.9ZM17.48 3.516c3.296-1.362 9.31-1.326 12.72-.062L17.553 16.09ZM33.927 4.91c3.291 1.371 7.519 5.66 9.039 8.97l-17.859-.03Zm10.559 12.664c1.36 3.303 1.324 9.33.062 12.75l-12.607-12.68Zm-1.469 16.344c-1.37 3.3-5.647 7.536-8.951 9.06l.03-17.9ZM30.52 44.484c-3.296 1.362-9.31 1.326-12.72.062L30.448 31.91ZM14.074 43.09c-3.292-1.372-7.52-5.66-9.04-8.971l17.859.03ZM3.514 30.426c-1.36-3.303-1.324-9.331-.062-12.75l12.607 12.679Z"></svg:path>`,
})
export class ArcticonsJyskebankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKAndNsIcon],svg[arcticons-k-and-ns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.404 12.698s20.61-3.031 23.035 9.287c1.186 9.871-15.36 16.663-15.36 16.663"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.67 17.938s3.823 5.816-11.497 13.416M19.652 12.423a4.15 4.15 0 0 1-2.143-3.07a6 6 0 0 1-2.65 3.693a7 7 0 0 1-.752.275a7 7 0 0 1 .752.275A4.15 4.15 0 0 1 17 16.666a6 6 0 0 1 2.65-3.693a7 7 0 0 1 .753-.275a7 7 0 0 1-.752-.275m-2.312 16.515l.962 4.671l-3.443-3.299l.962 4.671l-3.444-3.3m14.904-4.999l1.122 2.03a1.72 1.72 0 0 1-.673 2.336h0a1.7 1.7 0 0 1-1.307.147"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.908 24.201l1.371 2.481a1.72 1.72 0 0 1-.672 2.336h0a1.72 1.72 0 0 1-2.335-.673L22.9 25.864m-.15 3.322a1.72 1.72 0 0 1-.672 2.335h0a1.72 1.72 0 0 1-2.336-.672l-.54-.977a1.72 1.72 0 0 1 .673-2.336h0a1.72 1.72 0 0 1 2.335.673m1.371 2.481l-2.203-3.985m-2.456-1.144l-3.325-6.015l7.31 3.812l-3.325-6.015M4.5 25.68l3.325 6.016m3.234-1.788l-4.14-1.638l.825-4.357m-.825 4.357l-.756.418m15.865-10.636a1.22 1.22 0 0 0-.348-1.475m-4.235 9.801l-.508.28a1.2 1.2 0 0 1-1.091.038l-3.672-1.715a2.8 2.8 0 0 1-1.57-1.093a1.4 1.4 0 0 1 .589-1.908a1.375 1.375 0 0 1 1.889.538c.38.687.148 1.581-.772 2.345c-1.026.85-1.395 1.875-.822 2.912a1.602 1.602 0 0 0 2.387.576c1.389-.767 1.478-2.535 1.79-4.82m9.921-2.093a1.93 1.93 0 0 0 1.423-.347l.337-.187a1.137 1.137 0 0 0 .443-1.546h0a1.137 1.137 0 0 0-1.545-.446l-.674.373a1.137 1.137 0 0 1-1.545-.447h0a1.137 1.137 0 0 1 .443-1.546l.338-.186a1.93 1.93 0 0 1 1.422-.348"></svg:path>`,
})
export class ArcticonsKAndNsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKCorporateIcon],svg[arcticons-k-corporate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m26.036 10.487l11.476 11.477a1.126 1.126 0 0 1 0 1.596L18.904 42.168a1.126 1.126 0 0 1-1.596 0L5.83 30.692a1.126 1.126 0 0 1 0-1.596l18.61-18.609a1.126 1.126 0 0 1 1.596 0"></svg:path><svg:path d="m25.788 13.168l9.043 9.044a.87.87 0 0 1-.004 1.234l-9.575 9.574a.87.87 0 0 1-1.233.004l-9.044-9.043a.87.87 0 0 1 .004-1.234l9.575-9.575a.87.87 0 0 1 1.234-.004m-5.459 18.187l2.065 2.065a.87.87 0 0 1-.004 1.233l-4.677 4.678a.87.87 0 0 1-1.233.003L8.665 31.52a.87.87 0 0 1 .004-1.234l4.677-4.677a.87.87 0 0 1 1.234-.004h0l2.066 2.067m-7.087 1.725l9.004 9.084m.269-5.631l2.669 2.693m-9.005-9.083l2.669 2.692m1.858 4.825l3.009 3.035m-9.005-9.084l2.983 3.009m-2.945 2.983l2.955-2.955m.06 5.97l2.955-2.955"></svg:path><svg:path d="m17.915 27.632l2.453 2.453a.87.87 0 0 1-.004 1.233l-2.446 2.446a.87.87 0 0 1-1.233.004l-2.453-2.453a.87.87 0 0 1 .003-1.234l2.446-2.446a.87.87 0 0 1 1.234-.003m12.47-22.131a11.955 11.955 0 0 1 12.114 12.113"></svg:path><svg:path d="M30.387 8.19a9.265 9.265 0 0 1 9.423 9.423"></svg:path><svg:path d="M30.387 10.912a6.544 6.544 0 0 1 6.702 6.702"></svg:path></svg:g>`,
})
export class ArcticonsKCorporateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKLDIcon],svg[arcticons-k-l-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c11.879 0 21.5 9.621 21.5 21.5S35.879 45.5 24 45.5S2.5 35.879 2.5 24S12.121 2.5 24 2.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.037 16.034c-2.336 5.458.194 11.777 5.652 14.114c5.458 2.336 11.776-.194 14.113-5.652q.105-.245.198-.496c2.2-5.515 8.454-8.203 13.97-6.004c5.515 2.2 8.203 8.454 6.004 13.97"></svg:path>`,
})
export class ArcticonsKLDIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKPlusIcon],svg[arcticons-k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 13.106h5.326v21.728H4.5zm10.824 6.852l11.57 15.157h-4.286c-1.776 0-2.69-1.172-3.631-2.416l-6.725-8.89zl3.653-4.657c.94-1.244 1.855-2.416 3.63-2.416h4.286L18.448 24.05m18.776-1.872V34.73m-6.276-6.276H43.5"></svg:path>`,
})
export class ArcticonsKPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKPlusBizIcon],svg[arcticons-k-plus-biz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 26.302V42m6.188-15.698H40.86L30.188 42H40.86m-27.074-7.849c2.224 0 4.027 1.757 4.027 3.925S16.01 42 13.786 42H7.14V26.302h6.645c2.224 0 4.027 1.757 4.027 3.925s-1.803 3.924-4.027 3.924Zm0 0H7.14m0-27.995h3.818v15.351H7.14zm7.758 4.841l8.293 10.709H20.12c-1.273 0-1.928-.828-2.602-1.707l-4.82-6.28zl2.619-3.29C18.19 6.827 18.847 6 20.119 6h3.072l-6.054 7.888m13.459-1.322v8.868M26.098 17h8.997"></svg:path>`,
})
export class ArcticonsKPlusBizIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKPlusSmeIcon],svg[arcticons-k-plus-sme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 7.63h3.502v14.083H5.5zm7.117 4.441l7.608 9.824h-2.818c-1.168 0-1.769-.76-2.388-1.565l-4.421-5.762zl2.401-3.018c.619-.807 1.22-1.566 2.388-1.566h2.818l-5.554 7.237m12.348-1.214v8.135m-4.126-4.067h8.253M5.787 38.934c.887 1.15 1.999 1.579 3.546 1.579h2.14a3.6 3.6 0 0 0 3.607-3.594v-.016a3.6 3.6 0 0 0-3.607-3.594H9.112A3.605 3.605 0 0 1 5.5 29.71h0a3.61 3.61 0 0 1 3.619-3.606h2.129c1.546 0 2.658.428 3.545 1.579m20.477 5.626h4.714m2.516 7.204h-7.23V26.105h7.23M17.685 40.497V26.105l7.23 14.408l7.23-14.386v14.386"></svg:path>`,
})
export class ArcticonsKPlusSmeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKPowerpayIcon],svg[arcticons-k-powerpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M45.5 24c0 11.884-9.616 21.5-21.5 21.5S2.5 35.883 2.5 24S12.117 2.5 24 2.5S45.5 12.117 45.5 24"></svg:path><svg:path d="M22.418 34.528V20.926c0-1.306.072-2.372-1.5-3.62l-4.306-3.42c-2.882-2.287-3.317-4.378-3.317-4.378v6.762c0 1.86.86 3.004 2.448 4.158l3.414 2.485c3.059 2.226 3.233 4.658 3.261 8.637m1.648 2.978V20.926c0-1.306-.303-2.48 1.504-3.68l5.153-3.416c3.395-2.252 3.634-4.322 3.634-4.322v6.385c0 2.516-1.498 3.705-3.295 4.85l-3.207 2.043c-3.463 2.205-3.79 2.498-3.79 8.764"></svg:path><svg:path d="M34.357 15.893v7.29c0 1.272-.459 2.793-1.515 3.5l-4.537 3.042c-1.36.911-2.66 1.615-2.66 3.539v1.264v-6.187c0-2.065-.175-4.153 2.21-5.556"></svg:path><svg:path d="M10.41 36.048c2.657-.239 3.877-1.98 6.59-1.944c2.913.04 3.92 1.97 7 1.97s4.088-1.93 7-1.97c2.713-.036 3.933 1.705 6.59 1.944m-22.443 3.811a5.9 5.9 0 0 1 1.853-.27c2.913.039 3.92 1.97 7 1.97s4.088-1.931 7-1.97c.7-.01 1.301.099 1.853.27"></svg:path><svg:path d="M13.413 38.757c1.069-.506 2.105-1.017 3.587-.997c2.913.04 3.92 1.97 7 1.97s4.088-1.93 7-1.97c1.482-.02 2.518.49 3.587.997"></svg:path><svg:path d="M11.915 37.559c1.728-.572 2.94-1.656 5.085-1.627c2.913.04 3.92 1.97 7 1.97s4.088-1.93 7-1.97c2.146-.029 3.358 1.055 5.085 1.627"></svg:path></svg:g>`,
})
export class ArcticonsKPowerpayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKRuokaIcon],svg[arcticons-k-ruoka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.5h37m0-37h-37m9.179 6.007v24.958m19.642.042L19.139 23.986l15.182-12.437"></svg:path>`,
})
export class ArcticonsKRuokaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKShopIcon],svg[arcticons-k-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.557 25.992l8.665 11.28h-3.21c-1.33 0-2.015-.872-2.72-1.798l-5.036-6.616l5.038-6.332c.704-.925 1.39-1.798 2.72-1.798h3.209l-6.325 8.31zm-8.105-5.099h3.988v16.17h-3.988zm26.543-3.782a3.2 3.2 0 0 1-1.185.224c-1.853 0-3.345-1.561-3.345-3.5M37.454 5.5v8.335c0 1.939-1.492 3.5-3.345 3.5s-3.345-1.561-3.349-3.5c-.003 1.939-1.495 3.5-3.348 3.5s-3.345-1.561-3.345-3.5m-.001-7.834l-.005 7.834c-.006 1.939-1.498 3.5-3.35 3.5s-3.346-1.561-3.344-3.5c0 1.939-1.491 3.5-3.344 3.5s-3.345-1.561-3.351-3.5c-.006 1.939-1.498 3.5-3.35 3.5c-.47 0-.916-.1-1.321-.282M30.756 6.001v7.834m-13.39-7.834v7.834m-6.7-8.335v8.335"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsKShopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsK9mailIcon],svg[arcticons-k9mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.942 35.91a1.97 1.97 0 0 0-1.97-1.97h-3.943a1.97 1.97 0 0 0-1.971 1.971v3.647a3.942 3.942 0 1 0 7.884 0Zm9.679-22.096L24 22.369l-13.621-8.555"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.187 31.24l4.416 6.553a2.61 2.61 0 0 0 2.276 1.301h2.179m7.884 0h2.169a2.61 2.61 0 0 0 2.276-1.3l4.426-6.555"></svg:path><svg:rect width="33.195" height="20.096" x="7.402" y="11.143" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.906 11.143V8.862"></svg:path><svg:rect width="7.855" height="4.362" x="12.622" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.5"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.094 11.143V8.862"></svg:path><svg:rect width="7.855" height="4.362" x="27.523" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.5" transform="rotate(-180 31.45 6.68)"></svg:rect>`,
})
export class ArcticonsK9mailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKadokomiIcon],svg[arcticons-kadokomi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.236 5.875v16.444M5.125 9.986h16.444V22.32m4.112-.001V5.875m16.444 8.222H25.681"></svg:path><svg:circle cx="33.903" cy="5.875" r=".75" fill="currentColor"></svg:circle><svg:circle cx="42.125" cy="5.875" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.125 26.431h16.444v16.444H5.125m37-10.963l-16.444 5.482m0-10.963h16.444M25.681 42.875h16.444"></svg:path>`,
})
export class ArcticonsKadokomiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKagawabankIcon],svg[arcticons-kagawabank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.741 8.763C11.323 8.763 4.5 15.585 4.5 24s6.824 15.237 15.241 15.237a15.24 15.24 0 0 0 14.706-11.316l2.578-9.579s1.56-6.915 6.475-9.578z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.44 39.14l5.598-20.798s1.56-6.915 6.475-9.579M11.999 37.128l5.057-18.786s1.56-6.915 6.474-9.579"></svg:path>`,
})
export class ArcticonsKagawabankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKagiIcon],svg[arcticons-kagi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.03 34.39h-8.302c-2.238 0-2.628-2.45-2.238-3.435c.186-.492.678-1.17 1.068-1.671c1.56.891 3.417 1.383 5.367 1.383c6.206-.01 11.228-5.049 11.218-11.254v-.019c0-3.333-1.467-6.267-3.715-8.431l.297-.288a2.93 2.93 0 0 1 2.34-.882l1.365.093V4.5H33.1a6.41 6.41 0 0 0-5.943 4.02a11 11 0 0 0-3.13-.491c-6.246.054-11.266 5.16-11.212 11.407a11.3 11.3 0 0 0 2.14 6.524a3 3 0 0 1-.678.492l-.297.288c-2.238 2.163-3.315 4.902-2.73 8.04c.297 1.672 1.765 3.437 3.222 4.412a6.13 6.13 0 0 0 3.51.975l9.36-.381c1.077 0 2.052.492 2.637 1.467l1.17 2.247l5.758-1.96l-.975-2.153a8.75 8.75 0 0 0-7.903-4.996Zm-3.993-20.38c2.916 0 5.358 2.442 5.358 5.385s-2.442 5.386-5.367 5.386a5.423 5.423 0 0 1-5.358-5.386a5.293 5.293 0 0 1 5.358-5.385z"></svg:path>`,
})
export class ArcticonsKagiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKagiSearchIcon],svg[arcticons-kagi-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.818" cy="20.68" r="5.742" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.04 12.5c-2.75 0-3.601.997-4.701 3.02m-6.224 9.545c-1.887 1.886-3.154 2.44-3.154 4.635s1.765 3.203 3.707 3.203h6.412c2.143 0 3.077 2.597 3.077 2.597"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path>`,
})
export class ArcticonsKagiSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKahootIcon],svg[arcticons-kahoot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.16 5.928v36.13m19.42 0L11.676 23.993L26.58 5.928M11.676 23.993H7.16M29.898 5.5L40.84 7.561l-4.3 26.872zm4.301 31.02l3.588-.051l1.323 3.919l-3.283 2.112l-3.232-2.341z"></svg:path>`,
})
export class ArcticonsKahootIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaiAccessIcon],svg[arcticons-kai-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.726 24.409l7.632-.157l3.83 13.788h-8.214l-1.908-8.002m-7.326-1.996l4.01-9.402h.606l1.48 6.21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 14.03L6.563 33.37l9.187-20.76c.916-2.07 2.513-2.65 4.58-2.65h6.06l3.159 11.375m-5.483 8.706L12.411 38.04H4.5h0l39-20.917"></svg:path>`,
})
export class ArcticonsKaiAccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaidanIcon],svg[arcticons-kaidan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.471 21.471 0 0 0 6.693 36.718a21.4 21.4 0 0 0-3.818 6.332a.995.995 0 0 0 .728 1.343C5.606 44.806 9.113 45.5 24 45.5a21.5 21.5 0 0 0 0-43m-9.5 12.851h19m-11 17.299h11m-19 0h4m-8-8.65h27"></svg:path>`,
})
export class ArcticonsKaidanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaideeIcon],svg[arcticons-kaidee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 19.834v7.769m.001-1.65l3.517-3.5m-2.398 2.386l2.765 2.753"></svg:path><svg:circle cx="20.754" cy="20.077" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.754 22.456v5.147m-2.069-1.943c0 1.074-.87 1.943-1.942 1.943h0a1.94 1.94 0 0 1-1.943-1.942v-1.263c0-1.072.87-1.942 1.942-1.942h0c1.073 0 1.943.87 1.943 1.942m0 3.205v-5.147m13.679 4.167c-.335.586-.965.98-1.688.98h0a1.94 1.94 0 0 1-1.942-1.942v-1.263c0-1.072.87-1.942 1.942-1.942h0c1.073 0 1.942.87 1.942 1.942v.632h-3.884m9.511 1.593a1.94 1.94 0 0 1-1.687.98h0a1.94 1.94 0 0 1-1.943-1.942v-1.263c0-1.072.87-1.942 1.943-1.942h0c1.072 0 1.942.87 1.942 1.942v.632h-3.885m-7.865-.632c0-1.072-.87-1.942-1.942-1.942h0c-1.073 0-1.943.87-1.943 1.942v1.263c0 1.072.87 1.942 1.943 1.942h0c1.072 0 1.942-.87 1.942-1.942m0 1.942v-7.769"></svg:path>`,
})
export class ArcticonsKaideeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaitekiIcon],svg[arcticons-kaiteki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.987 38.16c0 3.024-2.452 5.475-5.478 5.475S8.03 41.183 8.03 38.16V10.116c0-3.024 2.453-5.475 5.479-5.475s5.478 2.451 5.478 5.475zm.008-20.187l11.74-11.732c2.139-2.138 5.607-2.138 7.747 0s2.14 5.605 0 7.743l-19.48 19.467m8.191-7.732l8.579 8.573a5.47 5.47 0 0 1 0 7.742a5.48 5.48 0 0 1-7.748 0l-8.443-8.437"></svg:path>`,
})
export class ArcticonsKaitekiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKajanurakIcon],svg[arcticons-kajanurak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M24.168 31.796c-5.33.827-9.192-.78-10.131-4.973c-1.247-5.562 1.578-10.87 5.799-12.408M30.12 30.658c5.108-2.451 5.557-5.196 4.728-9.176c-1.02-4.898-5.585-7.834-8.903-8.083"></svg:path><svg:path d="M21.266 29.174c.367.347.682.464 1.218.445c.55.577.853 1.137 1.785 1.74c.685 1.596-.363 2.56-2.625 2.179c-.215-.63-.466-.993-.874-1.466c-.188.297-.253.658-.624.882c-.593.36-1.378.956-.831 1.235c.558.284 1.362.41 2.22.286c6.636 4.092 9.205-3.005 8.333-6.922c.193-.19.365-.37.428-.612"></svg:path><svg:path d="M27.842 31.874c-.512.273-1.098.375-1.868.265m-.724-1.879c.99.021 1.833-.09 2.68-.393m-3.89-1.577c.596-.759 2.366-1.364 3.504-1.014m-5.559-13.29c-.007-.909 1.11-1.49 2.506-1.691"></svg:path><svg:path d="M24.988 13.533c-.63-.233-2.413-.273-3.003.453m-1.645-1.589c1.09.47 1.032 1.234 1.127 1.898c-.299-.46-1.088-1.25-2.22-.685m12.339 10.343c0 .818-.666 1.48-1.487 1.48s-1.486-.662-1.486-1.48s.665-1.482 1.486-1.482s1.487.663 1.487 1.481m-10.591 2.263c0-.818-.666-1.481-1.487-1.481s-1.486.663-1.486 1.48s.665 1.482 1.486 1.482h0c.821 0 1.487-.663 1.487-1.481m-5.947 3.161c-1.793 5.481-4.95 5.946-6.583 3.26c-.67-1.1-.79-1.577-1.784-2.282c-1.67-1.184-4.398-2.003-3.506-6.362c1.253-6.13 8.766-7.54 12.41-6.272"></svg:path><svg:path d="M14.519 19.7c-3.81-.814-7.647 1.123-7.038 6.105c.473 3.867 2.758 5.535 7.24 3.082m19.863-1.747c2.877 4.053 5.746 3.627 6.638.806c.388-1.227.392-1.718 1.19-2.639c1.34-1.545 3.795-2.985 1.89-7.01c-2.687-5.678-10.366-5.247-13.584-3.134"></svg:path><svg:path d="M32.474 16.712c3.46-1.55 7.494-.517 8.077 4.366c.435 3.649-1.162 5.779-5.49 4.897"></svg:path></svg:g>`,
})
export class ArcticonsKajanurakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKakaoIcon],svg[arcticons-kakao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.833 42.5V17.833H5.5M30.167 42.5V17.833H42.5M5.5 5.5h37"></svg:path>`,
})
export class ArcticonsKakaoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKakaoStoryIcon],svg[arcticons-kakao-story-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.677 43.5h22.646M17.707 33.44l8.808 3.767q7.545-8.809 7.545-18.869V4.5H13.94v15.102h8.797Q24 27.147 17.707 33.44"></svg:path>`,
})
export class ArcticonsKakaoStoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKakaoWebtoonIcon],svg[arcticons-kakao-webtoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 16.544v14.912H29.735L24 18.838l-5.735 12.618H4.5V16.544h6.882v12.618l5.736-12.618h13.764l5.736 12.618V16.544z"></svg:path>`,
})
export class ArcticonsKakaoWebtoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKakaotalkIcon],svg[arcticons-kakaotalk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 6C13.23 6 4.5 12.93 4.5 21.46c0 5.39 3.5 10.13 8.79 12.89l-1.76 7.06a.46.46 0 0 0 .68.51L21 36.7a24 24 0 0 0 3 .2c10.77 0 19.5-6.91 19.5-15.44S34.77 6 24 6"></svg:path><svg:circle cx="23.91" cy="21.46" r="2.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.65" cy="21.46" r="2.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.18" cy="21.46" r="2.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKakaotalkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKakuIcon],svg[arcticons-kaku-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.46 11.13V42.5m33.08-31.37V42.5m0-3.65H7.46M40.54 5.5H7.46m7.16 7.63h18.75v18.75H14.62zM24 5.5v26.38m-9.38-9.37h18.76"></svg:path>`,
})
export class ArcticonsKakuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKakugoIcon],svg[arcticons-kakugo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.05 13c2.26-.71 7-1.79 9.08-3.33m-5.81 4.19a4.5 4.5 0 0 1 1.49 2.54c0 .61-1.57 6.3-1.9 7.83s-1.08 4.63-1.08 4.63"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.76 31.58c1.91-.17 8-3.54 11.23-4.06s7.79-1.58 11.51.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.17 28.44c.45-1.67 1.06-4.69 1.28-6.18s-.79-2.4-2.37-2.18s-8.42 2-8.42 2m3.45 11.78c2.79-1.31 5.47-2.67 7.37-1s.51 5.08 0 6.22s-1.13 1.35-1.13 1.35a47 47 0 0 0-5 .62m-4.01-7.25a9.3 9.3 0 0 1 2.77 5.66M11.63 35.6c2.37-1.13 3.42-2.34 5-1.8s.59 3.46.6 4.3a5.8 5.8 0 0 0 .34 1.71s-4.55 1.36-5.77 1.54m-3.26-6.46c.87 1.68 1.87 2.9 2.18 5.11M12 29.83a13.9 13.9 0 0 0 5.19-1.5M11.5 25.2a8.37 8.37 0 0 0 5.16-2.41M4.5 20.39a20.1 20.1 0 0 0 7.13-2.82a15.8 15.8 0 0 1 5.6-1.86M11 6.65a7.74 7.74 0 0 1 5.69 3.27"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.06 11.29A6.3 6.3 0 0 1 14.73 8"></svg:path>`,
})
export class ArcticonsKakugoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaleidoscopeIcon],svg[arcticons-kaleidoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.802" cy="24.486" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.927 16.949a11.306 11.306 0 1 1 5.134 21.38a11 11 0 0 1-1.512-.1M41.915 13.81a3.6 3.6 0 0 0-.164 1.008c0 1.586 1.687 3.383 1.097 4.753c-.51 1.186-3.375.83-4.239 1.765c-1.009 1.092-.72 3.926-2.089 4.554c-1.433.658-3.1-1.708-4.78-1.708c-1.47 0-3.45 2.236-4.739 1.725c-1.312-.52-.993-3.364-2.011-4.308c-.98-.908-3.308-.694-3.918-1.897c-.775-1.532.513-2.977.513-4.812c0-1.45-1.524-3.124-1.027-4.398c.574-1.469 3.243-2.141 4.339-3.237c.982-.982.347-3.582 1.635-4.15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.849 20.815c0 1.095 1.164 2.335.757 3.28c-.352.819-2.33.573-2.925 1.218c-.697.754-.497 2.71-1.442 3.143c-.99.454-2.14-1.179-3.299-1.179c-1.015 0-2.381 1.544-3.27 1.191c-.906-.359-.686-2.321-1.388-2.973c-.676-.627-2.283-.479-2.704-1.31c-.535-1.057.354-2.054.354-3.32c0-1.001-1.052-2.156-.709-3.035c.396-1.014 1.792-1.329 2.548-2.085c.678-.678.884-2.224 1.773-2.617c.963-.425 2.425.778 3.545.778c1.147 0 2.286-1.142 3.267-.697c1.041.472.918 2.158 1.655 3.014c.506.587 2.167.606 2.48 1.327c.417.954-.642 2.157-.642 3.265"></svg:path><svg:circle cx="26.642" cy="26.895" r="14.458" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKaleidoscopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKalgebraIcon],svg[arcticons-kalgebra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.324 34.456h-8.657l4.333-6.5l-4.32-6.5h8.653"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 15.5h-9a2.006 2.006 0 0 1-2-2v-9h-18a2.006 2.006 0 0 0-2 2v35a2.006 2.006 0 0 0 2 2h27a2.006 2.006 0 0 0 2-2Zm-11-11l11 11"></svg:path>`,
})
export class ArcticonsKalgebraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaliumIcon],svg[arcticons-kalium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37 21.3c-1.187 3.442-4.349 7.197-7.919 8.053c-3.661.878-7.591-3.116-10.117-5.054M11 26.7c1.187-3.443 4.349-7.197 7.919-8.053c3.66-.878 7.591 3.116 10.117 5.053"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKaliumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaloHomeIcon],svg[arcticons-kalo-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.717 12.713c9.469 11.097-.51 18.835-.51 18.835l3.765 4.779s11.483-10.835-2.124-24.442c0 0-1.437-.84-1.131.827zm-13.503 6.542v9.49h4.745M5.5 19.255v9.49m0-3.305l5.101-6.153m0 9.459L6.694 24m23.556-4.745a3.137 3.137 0 0 1 3.144 3.143v3.203c0 1.742-1.402 3.144-3.143 3.144s-3.144-1.402-3.144-3.144v-3.203a3.137 3.137 0 0 1 3.144-3.143m-12.299 6.346h-4.205m-1.041 3.145l3.143-9.491l3.144 9.49"></svg:path>`,
})
export class ArcticonsKaloHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKamuskuIcon],svg[arcticons-kamusku-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.5 18V7.76a2.25 2.25 0 0 0-2.24-2.26H7.75A2.26 2.26 0 0 0 5.5 7.76v21.31a.88.88 0 0 0 .89.88a.9.9 0 0 0 .61-.25l4.71-4.7h5.79"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.25 18H19.74a2.26 2.26 0 0 0-2.24 2.25v14.97a2.26 2.26 0 0 0 2.24 2.25H36.3l4.7 4.76a.88.88 0 0 0 1.25 0a.84.84 0 0 0 .25-.6V20.29A2.27 2.27 0 0 0 40.25 18M9.15 35.64l1.83 1.82M5.5 31.62v5.84h5.48l-1.83 1.83m29.7-29.48l-1.83-1.82m5.48 5.84V7.99h-5.48l1.83-1.83M21.24 23.69h17.61m-17.63 4.09h10.57m-10.57 4.1h13.36"></svg:path>`,
})
export class ArcticonsKamuskuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKamvutIcon],svg[arcticons-kamvut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 10.403a37 37 0 0 1 37 0L24 42.554z"></svg:path><svg:circle cx="18.259" cy="12.954" r="3.828" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24.054" r="3.828" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKamvutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKanIcon],svg[arcticons-kan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5v39"></svg:path>`,
})
export class ArcticonsKanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKanadeIcon],svg[arcticons-kanade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.916 30.304v10.208M11.6 42.5h24.824m1.66-12.196v10.208M24.012 24.863v13.12m0-.003l6.821-8.024m-13.695 0l6.876 8.027M9.916 15.599v6.07l28.168-.028v-5.898m-2.072-.144V5.5h-2.414m-3.052 0H17.8m-2.964 0h-2.524v9.811M19.18 5.5l-6.868 6.819M29.107 5.5l6.905 6.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.331 13.485h2.553v2.553h-2.553zm10.808 0h2.553v2.553h-2.553z"></svg:path>`,
})
export class ArcticonsKanadeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKanadrillIcon],svg[arcticons-kanadrill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.9 5.83C23.15 16 21.19 24.64 24.32 42.17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.81 12.49C18.27 14 24.85 14.8 41 9m-7.77 7C31.48 22.6 23.59 40 11 40C-.83 40 7.3 23.12 27.05 21.45c21.94-1.86 17 12.32 6.78 20"></svg:path>`,
})
export class ArcticonsKanadrillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKanalDIcon],svg[arcticons-kanal-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13.649" cy="24.079" r="5.942" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.943 42.5c19.25-2.524 25.728-14.197 22.598-22.864c-.536-1.484-5.67-13.98-26.578-14.136l2.728 9.333a9.374 9.374 0 0 1 7.527 9.19h0a9.374 9.374 0 0 1-12.062 8.982z"></svg:path>`,
})
export class ArcticonsKanalDIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKanapkamanIcon],svg[arcticons-kanapkaman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.94 15.79c5.418-1.108 18.552-3.78 19.217 4.366a63.3 63.3 0 0 1-15.704 5.217C18.388 26.73 7.94 28.43 6.65 23.949c-1.384-4.805 8.091-6.482 16.29-8.158"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.708 14.575c1.056.285 1.518 2.147 1.6 3.558M22.94 15.79c.851.4 1.73 2.955 1.756 3.834m-9.708-2.098a5.01 5.01 0 0 1 2.149 4.067m25.02-1.437c.346.985 1.53 1.61 1.318 2.702s-2.276 1.038-2.436 1.663s-.413 1.544-.945 1.823s-1.75-.286-2.222 0s-1.222 1.792-2.183 2.183c-1.111.452-1.936-2.083-2.861-1.877s-1.957 2.722-3.008 2.702s-1.97-2.163-3.234-2.236s-1.657 2.168-3.18 2.236c-1.046.047-1.378-1.382-2.037-1.357c-2.053.076-3.97 3.005-5.736 3.06c-2.865.09-3.444-2.425-4.884-2.661c-.947-.155-2.033.935-3.114.652c-.597-.156-.163-1.742-1.12-2.194s-1.622.537-2.007-.834c-.126-.446 1.457-1.75 2.142-2.07"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.655 26.74c.017 1.5-.35 5.048 1.993 6.112c3.282 1.492 13.435.12 18.645-.399s14.673-3.114 15.452-4.95a4.53 4.53 0 0 0 0-3.466"></svg:path>`,
})
export class ArcticonsKanapkamanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKancionlIcon],svg[arcticons-kancionl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5v2a2 2 0 0 1-2 2h-2v29h2a2 2 0 0 1 2 2v2h29v-2a2 2 0 0 1 2-2h2v-29h-2a2 2 0 0 1-2-2v-2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.51 22.79a2.25 2.25 0 0 0-2.24-2.25h-.13A2.34 2.34 0 0 0 29 22.93V25a2.25 2.25 0 0 0 2.23 2.25h0A2.24 2.24 0 0 0 33.5 25h0v-2.19m-1.91 8.48v6.72h3.36M21.9 27.26h3.35m-3.35-6.72h3.35m-1.67 0v6.72M19 25a2.24 2.24 0 0 1-2.23 2.25h0A2.24 2.24 0 0 1 14.49 25h0v-2.2a2.24 2.24 0 0 1 2.24-2.24h0A2.24 2.24 0 0 1 19 22.8h0M31.02 9.69v6.73m4.5 0V9.69m-4.5 0l4.5 6.73M13.06 9.7v6.7m.87-3.35l2.47-3.33m-2.47 3.33l2.47 3.36m-2.47-3.36h-.87m8.32 3.35l2.24-6.71m2.15 6.73l-2.15-6.73m1.43 4.48h-2.92m-9.65 17.12v6.72m4.5 0v-6.72m-4.5 0l4.5 6.72m4.4-.02l2.24-6.7m2.15 6.72l-2.15-6.72m1.43 4.47h-2.92m2.55-6.72l-.96.96"></svg:path>`,
})
export class ArcticonsKancionlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKangarideIcon],svg[arcticons-kangaride-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.737 19.448l-8.105 24l14.789.052l.263-10.579l8.421 1.263l3.263-3.158zm.947-2.159c4.876-3.15 6.608-6.525 4.58-12.789zm14.474-7.21c-.576 6.893-8.738 8.947-11.58 8.053z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.875 27.783a1.838 1.838 0 1 1 .005-.001"></svg:path>`,
})
export class ArcticonsKangarideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKanjiDojoIcon],svg[arcticons-kanji-dojo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="38.821" cy="39.995" r="3" fill="none" stroke="currentColor" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.099 28.34H41.9M13.848 16.07h19.419c1.186 0 1.402 1.013.656 1.837c-2.922 3.232-6.866 4.687-10.306 5.49c-1.006.235-.818.802-.374 1.265c.978 1.02 2.064 2.448 2.064 5.002v8.928c0 2.17-1.614 3.444-3.556 3.444c-1.734 0-3.23-.365-5.203-1.376m7.46-35.654v4.063M7.02 15.844v-5.181A1.59 1.59 0 0 1 8.608 9.07H39.41c.878 0 1.59.711 1.59 1.59v5.127"></svg:path>`,
})
export class ArcticonsKanjiDojoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKanjiStudyIcon],svg[arcticons-kanji-study-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="19.593" height="28.186" x="23.907" y="12.458" fill="none" stroke="currentColor" stroke-linejoin="round" rx="1.05" ry="1.05"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M30.288 7.417c-.164 0-.327.034-.478.098l-15.78 6.704a1.225 1.225 0 0 0-.649 1.606l.001.002l10.047 23.689c.142.331.423.583.768.687a1.22 1.22 0 0 1-.289-.785V13.683a1.22 1.22 0 0 1 1.218-1.226h8.112l-1.82-4.292a1.22 1.22 0 0 0-1.129-.749z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M17.847 7.356c-.325 0-.637.129-.866.359L4.86 19.848a1.223 1.223 0 0 0-.003 1.73l.003.003l18.182 18.198c.255.253.608.381.966.349a1.22 1.22 0 0 1-.579-.61L13.381 15.827a1.22 1.22 0 0 1 .643-1.604l.005-.002l7.852-3.334l-3.169-3.171a1.22 1.22 0 0 0-.866-.359zm9.981 20.776h11.751m-9.207-4.027h6.373c.389 0 .46.332.216.603c-.959 1.061-2.254 1.538-3.383 1.802c-.33.077-.268.263-.123.415c.321.335.677.803.677 1.642v2.931c0 .712-.53 1.13-1.167 1.13c-.569 0-1.06-.12-1.708-.451m2.449-11.702v1.334m-5.577 2.223v-1.701c0-.289.234-.522.522-.522h10.108c.289 0 .522.234.522.522v1.682"></svg:path>`,
})
export class ArcticonsKanjiStudyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKanjidrawIcon],svg[arcticons-kanjidraw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.099 28.82H41.9M13.848 16.55h19.419c1.186 0 1.402 1.013.656 1.837c-2.922 3.232-6.866 4.687-10.306 5.489c-1.006.235-.818.802-.374 1.265c.978 1.02 2.064 2.448 2.064 5.002v8.929c0 2.169-1.614 3.443-3.556 3.443c-1.734 0-3.23-.364-5.203-1.375m7.46-35.655v4.064M7.02 16.324v-5.182A1.59 1.59 0 0 1 8.608 9.55H39.41c.878 0 1.59.71 1.59 1.589v5.128"></svg:path>`,
})
export class ArcticonsKanjidrawIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKanjitreeIcon],svg[arcticons-kanjitree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5v37M6.704 16.092h34.592m-17.296 0c0 4.964-12.925 16.087-17.24 18.88M24 16.092c0 4.964 12.925 16.087 17.24 18.88"></svg:path>`,
})
export class ArcticonsKanjitreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKanopyIcon],svg[arcticons-kanopy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.32 5.112l6.324-.612v39m8.073-24.623h11.152M16.644 34.391l15.557-15.514m-9.81 9.783l12.345 14.789m-8.135 0H37.68m-16.918.051H10.32"></svg:path>`,
})
export class ArcticonsKanopyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKapookIcon],svg[arcticons-kapook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.918 29.976l7.52.346c.636.03 1.22.518 1.151 1.152l-.46 4.317c-.068.635-.515 1.277-1.153 1.268l-7.519-.116c-.638-.01-1.215-.516-1.152-1.152l.46-4.663c.063-.635.515-1.181 1.153-1.152m8.495-2.388a1.15 1.15 0 0 1-1.147 1.153H31.03a1.15 1.15 0 0 1-1.152-1.148v-.005l.214-15.626a1.15 1.15 0 0 1 1.272-1.014h.004l11.112 1.278a1.15 1.15 0 0 1 1.014 1.272v.004zm-16.608-4.34l6.173 5.95c.431.473-.082 1.34-.082 1.34l-5.288 4.63c-.504.103-.68.422-1.397-.074l-7.483-8.09v6.673m-.001 0v.124a1.15 1.15 0 0 1-1.148 1.152H5.652A1.15 1.15 0 0 1 4.5 33.805V13.262a1.15 1.15 0 0 1 1.148-1.152h6.927a1.15 1.15 0 0 1 1.152 1.148v7.18l7.714-8.443c.717-.496.894-.177 1.397-.074l4.828 4.168s.513.868.082 1.34l-6.173 5.605"></svg:path>`,
})
export class ArcticonsKapookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaquiIcon],svg[arcticons-kaqui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.4 4.5a4 4 0 0 0-4 4v31a4 4 0 0 0 4 4h23.2a4 4 0 0 0 4-4v-31a4 4 0 0 0-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.606 8.909L16.394 24l15.212 15.091"></svg:path>`,
})
export class ArcticonsKaquiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaracaIcon],svg[arcticons-karaca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M14.552 26.034H29.74m-15.24 7.65l.07-10.999m5.018 10.999v-7.65m5.102 7.65v-7.65m5.049 7.65V14.316"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.5 18.843l-11.547-.003a2.37 2.37 0 0 1-2.37-2.371v-2.094m5.107-.029v4.495"></svg:path>`,
})
export class ArcticonsKaracaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKarafunIcon],svg[arcticons-karafun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.991 13.308v20.944m11.523-20.607l-8.327 12.448h-3.196m19.85 8.159c-2.145 2.145-3.028 2.44-4.794 2.44c-4.178 0-6.813-10.598-11.86-10.598m-5.028-12.786h3.663m7.608 0h3.663M14.159 34.252h3.663"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKarafunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKariIcon],svg[arcticons-kari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5C13.783 5.5 5.5 13.783 5.5 24v18.5H24c10.217 0 18.5-8.283 18.5-18.5S34.217 5.5 24 5.5"></svg:path><svg:circle cx="24.5" cy="22.5" r="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 30c0-9.665 8.507-17.5 19-17.5"></svg:path>`,
})
export class ArcticonsKariIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKartaKrakowskaIcon],svg[arcticons-karta-krakowska-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31.569" height="39" x="8.215" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.468 30.709v-6.396h2.094c1.184 0 2.143.962 2.143 2.148s-.96 2.148-2.143 2.148h-2.094m2.094 0l2.093 2.098m-9.298-6.394v6.396m3.438 0l-2.633-3.198l2.633-3.177m-2.633 3.177h-.805m10.909 3.179l2.078-6.377m2.079 6.396l-2.079-6.396m1.384 4.256h-2.771m-6.896 2.14v6.395m3.437 0l-2.633-3.197l2.651-3.198m-2.651 3.198h-.804m16.577-3.198l-1.599 6.395l-1.599-6.395l-1.599 6.395l-1.599-6.395m-5.656 4.277a2.119 2.119 0 0 0 4.237 0v-2.159a2.119 2.119 0 0 0-4.237 0zm-2.696 2.118V43.5m3.438 0l-2.634-3.198l2.651-3.198m-2.651 3.198h-.804M14.115 42.8c.392.51.884.7 1.568.7h.947c.881 0 1.596-.716 1.596-1.599h0c0-.883-.714-1.599-1.596-1.599h-1.046a1.597 1.597 0 0 1-1.595-1.599h0c0-.883.714-1.599 1.595-1.599h.947c.684 0 1.176.19 1.568.701m6.787 5.676l2.078-6.377m2.079 6.396l-2.079-6.396m1.384 4.257h-2.771m-12.22-4.257h26.428m-26.428-6.395h26.428m-26.428-6.396h26.428"></svg:path>`,
})
export class ArcticonsKartaKrakowskaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKartenIcon],svg[arcticons-karten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.726 23.988a4.83 4.83 0 0 1 2.57-4.27a4.34 4.34 0 0 0 2.26-3.85V8.224A2.724 2.724 0 0 0 25.833 5.5H8.223A2.724 2.724 0 0 0 5.5 8.223v31.553A2.724 2.724 0 0 0 8.223 42.5h17.61a2.724 2.724 0 0 0 2.723-2.723v-7.669a4.34 4.34 0 0 0-2.26-3.85a4.83 4.83 0 0 1-2.57-4.27"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.864 41.574h1.016a2.724 2.724 0 0 0 2.724-2.723V9.149a2.724 2.724 0 0 0-2.724-2.723h-1.016m8.28 35.148h3.632a2.724 2.724 0 0 0 2.724-2.723V9.149a2.724 2.724 0 0 0-2.723-2.723h-3.633"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.512 41.574h3.632a2.724 2.724 0 0 0 2.724-2.723V9.149a2.724 2.724 0 0 0-2.724-2.723h-3.632"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.88 41.574h3.632a2.724 2.724 0 0 0 2.724-2.723V9.149a2.724 2.724 0 0 0-2.724-2.723H28.88"></svg:path>`,
})
export class ArcticonsKartenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKarttaselainIcon],svg[arcticons-karttaselain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.146 43.468v-4.853c0-4.079-5.496-9.585-6.235-10.325c-4.025-3.748-5.431-9.618-3.536-14.842c1.894-5.223 6.712-8.758 12.185-8.94s10.507 3.025 12.734 8.11c2.227 5.087 1.2 11.038-2.574 15.026c0 0-6.745 6.151-6.745 10.97c0 3.558-.077 4.886-.077 4.886"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.513 23.806a7.847 7.847 0 0 1-.526-11.222c3.01-3.242 8.124-3.474 11.424-.519c3.301 2.956 3.538 7.98.53 11.223s-8.123 3.477-11.424.522z"></svg:path>`,
})
export class ArcticonsKarttaselainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKartulagaIcon],svg[arcticons-kartulaga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.822 20.243l-2.319 7l-2.318-7m7.138 6.233c.43.559.968.767 1.716.767h1.037c.964 0 1.746-.782 1.746-1.746v-.008c0-.964-.782-1.746-1.746-1.746h-1.143a1.75 1.75 0 0 1-1.748-1.748h0c0-.968.784-1.752 1.752-1.752h1.03c.749 0 1.287.208 1.716.767m-.963 11.823c0-1.184-.945-2.143-2.11-2.143h0c-1.165 0-2.11.96-2.11 2.143v2.183c0 1.183.945 2.143 2.11 2.143h0c1.165 0 2.11-.96 2.11-2.143h-2.11M12.983 30.69v6.468h3.138M34.28 10.841v4.326c0 1.184.945 2.143 2.11 2.143s2.11-.96 2.11-2.143v-4.326m-7.458 6.469v-6.469m-7.458 6.469v-6.47h2.085c1.18 0 2.135.973 2.135 2.173s-.956 2.172-2.135 2.172h-2.085m2.085.001l2.085 2.122m-6.033 17.708h-2.822m-.698 2.143l2.11-6.469l2.11 6.469m11.9-2.143h-2.823m-.699 2.143l2.111-6.469l2.11 6.469M19.647 15.167h-2.823m-.699 2.143l2.11-6.469l2.111 6.469M9.5 10.841v6.469m0-2.253l3.387-4.194m0 6.447l-2.594-3.234"></svg:path>`,
})
export class ArcticonsKartulagaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKasaIcon],svg[arcticons-kasa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.369 6.654L6.852 22.17A4.6 4.6 0 0 0 5.5 25.433v14.282a2.307 2.307 0 0 0 2.307 2.307h32.386a2.307 2.307 0 0 0 2.307-2.307V25.433a4.6 4.6 0 0 0-1.351-3.262L25.63 6.654a2.307 2.307 0 0 0-3.262 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.964 42.022V25.434a4.6 4.6 0 0 0-1.351-3.263L18.233 10.79m1.196 31.232V25.434a4.6 4.6 0 0 0-1.352-3.263l-5.613-5.613"></svg:path>`,
})
export class ArcticonsKasaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKasperskyPasswordManagerIcon],svg[arcticons-kaspersky-password-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.5 2.902l-16.021 9.25a3 3 0 0 0-1.5 2.598v18.5a3 3 0 0 0 1.5 2.598l16.021 9.25a3 3 0 0 0 3 0l16.021-9.25a3 3 0 0 0 1.5-2.598v-18.5a3 3 0 0 0-1.5-2.598L25.5 2.902a3 3 0 0 0-3 0"></svg:path><svg:circle cx="24" cy="18" r="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="15.696" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.034 23.669v3.427l1.26 1.173l-1.26 1.173l1.26 1.173l-1.26 1.173v2.745L24 35.79l1.965-1.257V23.67"></svg:path>`,
})
export class ArcticonsKasperskyPasswordManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaspikzIcon],svg[arcticons-kaspikz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.647 43.363c-.535-4.02-.367-8.814.853-9.067s1.72 6.992 1.743 10.12"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.837 41c1.677-6.914-.384-12.087-.552-13.433s1.59-4.962 1.472-7.696c-.168-3.911 2.944-5.762 2.944-7.234s-.084-6.014 3.407-5.888s-.803 4.542-.865 5.846s2.589 1.767 3.85 5.762s1.935 4.92 5.131 4.416s5.552-1.85 5.257-3.365s-1.43-5.34 2.44-6.098s-.169 4.837 0 5.762s2.186 1.472 3.995-1.01s3.028-4.457 4.08-3.196s-1.725 4.795-3.407 6.35a6.4 6.4 0 0 0-2.355 6.477c.715 3.953 1.756 7.317 4.032 10.366"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.39 45.343c-1.053-4.696-1.558-13.318-.675-16.472s3.239-4.458 6.561-1.977s3.258 17.594 3.258 17.594m4.066-1.779c-1.592-2.932-1.647-7.32-.259-7.992s3.162 6.014 3.162 6.014"></svg:path>`,
})
export class ArcticonsKaspikzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKastsIcon],svg[arcticons-kasts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="18.805" r="3.27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.945 21.935L32.472 43.5m-9.417-21.565L15.527 43.5m11.126-16.672l-7.105 5.154l11.887 8.545M29.586 25.32a8.583 8.583 0 1 0-10.999.145"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.368 31.068a14.304 14.304 0 1 0-14.704.019"></svg:path>`,
})
export class ArcticonsKastsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKatanaZeroIcon],svg[arcticons-katana-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M20.774 10.888c-1.454-1.695.322-2.39 2.353-2.936c1.064-.285 2.791-1.823 1.174-2.404"></svg:path><svg:path d="M22.616 8.246c-.554.575-.773 1.09-.563 1.794c.775-.484 1.76-.626 2.54-.5m-3.426.947c-1.001.965-1.391 2.076-1.276 3.075m5.159-.015c-.177-1.396-1.034-2.334-2.032-2.112m-3.199 5.217q.022.237.104.487m4.864-.322c.026.353.009.714-.061 1.05m9.499-3.962l4.217-1.245m-8.537 3.888l.1.357m-.608-4.61l.16 1.222a4 4 0 0 0-.14.518m1.59 2.605c-.14.444-.488.948-1.325 1.752l-.642 1.635m5.148-5.837l-.44-1.466c-.3-.127-.493-.169-.65.148c-.266-.395-.722-.444-1.091-.053c-.489-.19-.642-.091-.869.306c-.3-.107-.625-.03-.718.288a1.2 1.2 0 0 0-.012.621m-2.718 9.742c1.59.029 2.855-.664 3.973-1.495c.886-.239 1.243-.979 1.477-2.401l.479-2.901m-4.766 2.806c-.452.599-.98 1.193-1.35 1.798m-2.651-1.716l-.84.915m3.32-1.325l-.206-.105m-2.739-.372l-.566.116c-.042-.095-.59-.353-1.28.135l-1.117-1.096c-.885-.868-1.824-.986-2.516-1.37m5.442 9.432l-2.301.61c-.455.12-.95.2-1.33-.08l-4.508-3.66c2.478.363 4.757-1.058 6.082-1.963m-6.889.796c-1.015-1.688-1.375-3.367-1.09-5.033"></svg:path><svg:path d="m24.621 28.014l-5.62 2.015c-1.177-.758-2.152-1.605-3.563-2.248c-5.123-2.336-4.428-6.893-6.604-10.998c1.469 1.802 2.314 2.987 3.044 3.921m16.184 4.203l-.651 1.383m-16.273-6.764l2.518-1.493m14.237 11.855q.374.025.747.053"></svg:path><svg:path d="M27.936 31.628c.879-.47 1.86-.774 2.9-1c.788-.17 1.613-1.59 1.07-2.796l-1.395-3.1m-8.31 13.815l.194-.598l1.145-.156l1.163-2.283m-4.823 5.145l.278.64c.542 1.248 2.066 1.404 2.632.86c.427.056.731-.412.519-.849l-.587-1.462m-5.336-8.86l-.243 2.456c-.198 2.012 1.081 3.59 1.7 6.35l.553-.25"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.09l39 .381M26.048 6.55l.168 29.98"></svg:path>`,
})
export class ArcticonsKatanaZeroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKatawaShoujoIcon],svg[arcticons-katawa-shoujo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.17c12.092-16.05 37.06 6.213 0 29.117h0m0-29.117c-12.092-16.05-37.06 6.213 0 29.117h0m13.561-11.054l-4.674-3.773h0m6.078 2.041l-4.675-3.773h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.944 17.199l1.775 1.347m-1.775-1.347l-1.731.987l-.444 2.15l-7.358 8.835l1.396 1.131l7.266-9.006l2.02-.858l.626-1.892M22.966 34.019c.276 2.043 1.598 2.579 3.211 2.63h0m4.565-5.574l-4.565 5.574h0m1.354-8.204l-4.565 5.574h0m4.565-5.574l3.211 2.63h0m.862-5.871l-2.619-2.07h0m4.023.338l-2.62-2.07h0M25.8 16.604l2.022 1.735h0m-1.917 2.28l1.913-2.27h0m-3.91.557l2.007 1.721h0m-.115-4.023a3.456 3.456 0 1 1-2.038 2.205"></svg:path>`,
})
export class ArcticonsKatawaShoujoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKateMobileIcon],svg[arcticons-kate-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.314 42.406h7.547V31.052l5.921-5.917L30.817 42.5h9.869L25.977 19.923L40.234 5.679H29.702L14.86 21.642V5.5H7.33c0 12.404-.015 24.54-.015 36.905Z"></svg:path>`,
})
export class ArcticonsKateMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKatwarnIcon],svg[arcticons-katwarn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.876 39.344a5.434 5.434 0 0 0-10.867 0Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.82 31.222a13.5 13.5 0 0 0-24.281 8.122"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 20.864A21.952 21.952 0 0 0 9.82 39.417"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.45 10.606A30.87 30.87 0 0 0 4.5 26.363"></svg:path>`,
})
export class ArcticonsKatwarnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKauflandIcon],svg[arcticons-kaufland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.005 10.324h12.226V22.55H10.005zm0 14.774h12.226v12.226H10.005zm14.774 0l12.226 12.226H24.779zm0-14.774h12.226L24.779 22.55z"></svg:path>`,
})
export class ArcticonsKauflandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKavliIpmuIcon],svg[arcticons-kavli-ipmu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.474 26.957c0 .714-.579 1.293-1.293 1.293h0a1.293 1.293 0 0 1-1.293-1.294h0a1.293 1.293 0 0 1 2.586 0m19.665 3.437v5.3c0 1.5 1.2 2.7 2.6 2.7s2.6-1.2 2.6-2.7v-5.3m-15.353 8v-8l4 8l4-8v8m-15.452 0v-8h2.6c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7h-2.6m-3.353-5.4v8m-1.2-8h2.4m-2.4 8h2.4"></svg:path><svg:path fill="currentColor" d="M16.87 9.974a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m21.164 15.403a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-9.329-2.925a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:circle cx="26.953" cy="19.585" r=".75" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M37.127 11.346a.75.75 0 0 1-1.5 0a.75.75 0 0 1 1.5 0m-4.035-.462a.75.75 0 0 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsKavliIpmuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKayaClimbingIcon],svg[arcticons-kaya-climbing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.672 6.672l34.656 34.656m-35.056-.473l11.049-23.534L40.855 6.272"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsKayaClimbingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKayacNumberMasterIcon],svg[arcticons-kayac-number-master-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.8 31.089l2-1.089v8m9.35-15.35a2.653 2.653 0 0 1 3.176-2.6c1.111.214 1.999 1.175 2.11 2.302c.082.837-.184 1.664-.762 2.172C24.602 25.464 21.15 28 21.15 28h5.3m6.95-10.675c.553.463 1.15.675 2.489.675h.311a2 2 0 0 0 2-2h0a2 2 0 0 0-2-1.999"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.4 10.668c.554-.461 1.15-.671 2.49-.668l.31.002a2 2 0 0 1 2 2h0a2 2 0 0 1-2 1.999m-1.537 0H36.2"></svg:path>`,
})
export class ArcticonsKayacNumberMasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKbPayIcon],svg[arcticons-kb-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.452 32.179v-9.842h3.222c1.821 0 3.298 1.48 3.298 3.305s-1.477 3.305-3.298 3.305h-3.222m21.096.771v3.322a2.46 2.46 0 0 1-2.46 2.46h0c-.68 0-1.295-.275-1.74-.72"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.548 25.659v4.06a2.46 2.46 0 0 1-2.46 2.46h0a2.46 2.46 0 0 1-2.46-2.46v-4.06m-2.644 4.059a2.46 2.46 0 0 1-2.46 2.46h0a2.46 2.46 0 0 1-2.46-2.46v-1.6a2.46 2.46 0 0 1 2.46-2.46h0a2.46 2.46 0 0 1 2.46 2.46m0 4.06v-6.519m-4.493-9.526a1.816 1.816 0 0 1 0 3.632h-2.997V12.5h2.997a1.816 1.816 0 0 1 0 3.633m0 0h-2.997m-6.042-3.621v7.265m0-2.53l3.905-4.71m0 7.24l-2.991-3.632"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsKbPayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKbankTinhTienIcon],svg[arcticons-kbank-tinh-tien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.026 16.433a10.117 10.117 0 0 1 19.948-.002"></svg:path><svg:path d="m20.087 15.045l1.998 2.386l5.71-6.408"></svg:path><svg:path d="M9.395 5.5h29.21A3.886 3.886 0 0 1 42.5 9.395v29.21a3.886 3.886 0 0 1-3.895 3.895H9.395A3.886 3.886 0 0 1 5.5 38.605V9.395A3.886 3.886 0 0 1 9.395 5.5"></svg:path><svg:path d="m42.258 13.166l-12.93 5.281c-3.289 1.343-7.367 1.343-10.655 0l-12.93-5.281"></svg:path></svg:g>`,
})
export class ArcticonsKbankTinhTienIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKbcMobileIcon],svg[arcticons-kbc-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.267 33.758v.043a3.464 3.464 0 0 1-3.464 3.464h0a3.464 3.464 0 0 1-3.464-3.464v-3.53a3.464 3.464 0 0 1 3.464-3.464h0a3.464 3.464 0 0 1 3.464 3.465v.042m-23.312 6.951l-4.306-5.229l4.306-5.193m-5.621-.036v10.458m14.986-5.229h-4.314m4.314 0a2.614 2.614 0 1 1 0 5.23h-4.314v-10.46h4.314a2.614 2.614 0 1 1 0 5.23m4.267-18.575a6.14 6.14 0 0 1-6.14 6.14h0a6.14 6.14 0 0 1-6.14-6.14h0a6.14 6.14 0 0 1 6.14-6.14h0a6.14 6.14 0 0 1 6.14 6.14M17.24 19.98c4.76 3.475 9.329 1.674 11.956-.88m-11.964.88c-5.278.52-9.88 1.18-12.748 1.944v2.885h39v-6.072h0c-4.208-.03-9.22.1-14.294.363"></svg:path>`,
})
export class ArcticonsKbcMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKbzpayIcon],svg[arcticons-kbzpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.425 8.45h7.954l-7.954 11.98h7.954m-15.214-5.989c1.658 0 3.001 1.34 3.001 2.995s-1.343 2.995-3.001 2.995h-4.952V8.451h4.952c1.658 0 3.001 1.341 3.001 2.995s-1.343 2.995-3.001 2.995m0 0h-4.952m-.21 21.03v-11.98h3.93a4.023 4.023 0 0 1 0 8.047h-3.93m25.691 3.968l-3.197-7.937m6.002 0L39.688 38.35a1.8 1.8 0 0 1-1.698 1.2h-.494m-4.274-7.039a2.987 2.987 0 0 1-2.978 2.995h-1.046c-1.09 0-1.973-.888-1.973-1.984s.883-1.984 1.973-1.984h4.03"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.975 28.355c.723-.723 1.23-.786 2.626-.786c1.585 0 2.626.695 2.626 2.576v5.36M4.5 8.471v11.98m0-4.173l6.453-7.767m0 11.94l-4.943-5.99M4.5 35.471H9l-4.5-4.5zm39-27H39l4.5 4.5z"></svg:path>`,
})
export class ArcticonsKbzpayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKcbIbankIcon],svg[arcticons-kcb-ibank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.939 2.635l-4.4.043l-.57 5.601a16 16 0 0 0-4.255 1.381l-3.748-4.193L9.4 8.026l2.852 4.896a16 16 0 0 0-2.621 3.613l-5.545-1.2l-1.32 4.183l5.125 2.26a16 16 0 0 0 .002 4.488l-5.127 2.26l1.32 4.183l5.555-1.203a16 16 0 0 0 2.619 3.602l-2.86 4.91l3.565 2.558l3.761-4.209a16 16 0 0 0 4.24 1.375l.571 5.623h4.404c10.881-1.217 19.291-10.395 19.291-21.344c0-10.87-8.503-20.076-19.295-21.387zm-2.205.021v42.71"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.004 16.855h-20.27a7.167 7.167 0 0 0 0 14.333h20.27"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.734 2.656c6.642 4.926 10.752 13.096 10.75 21.365c-.004 8.262-4.114 16.423-10.75 21.344"></svg:path>`,
})
export class ArcticonsKcbIbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKdeIcon],svg[arcticons-kde-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.22 4.69l-6.4.62V32l6.33-1V19.66l8.51 12.63l6.67-2.14L33.62 18L42.4 6.55L35.59 5l-8.44 11.42zM12.71 11.2a.33.33 0 0 0-.2.09L10 13.84a.35.35 0 0 0-.05.4l2.94 4.91A13 13 0 0 0 11.66 22l-5.4 1.13a.34.34 0 0 0-.26.33v3.6a.33.33 0 0 0 .25.32l5.24 1.29c.27 1.164.701 2.284 1.28 3.33l-3 4.69a.33.33 0 0 0 0 .42l2.51 2.54a.32.32 0 0 0 .4 0l4.75-2.93c.94.554 1.948.981 3 1.27l1.11 5.41a.32.32 0 0 0 .32.26h3.55a.32.32 0 0 0 .31-.25L27.05 38a12.5 12.5 0 0 0 3.09-1.32l4.68 3.12a.33.33 0 0 0 .41 0l2.51-2.54a.33.33 0 0 0 0-.41L36.08 34l-.55.18c-.08 0 .42-1.39.13-1.86l-2.19-3.24c-1 4.09-5.77 6.94-9.72 6.94c-5.66-.038-10.219-4.659-10.18-10.32v-.02c0-4.2 3.27-9.2 7.25-9.86v-2.66a7.56 7.56 0 0 0-3.1 1.28h0l-4.8-3.18a.27.27 0 0 0-.21-.05z"></svg:path>`,
})
export class ArcticonsKdeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKdeConnectIcon],svg[arcticons-kde-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="23" height="39" x="12.5" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 8h23m0 32h-23m10.545-20.565a3.15 3.15 0 0 0-1.291.533h0l-2-1.325a.11.11 0 0 0-.088-.02v-.005a.14.14 0 0 0-.083.038l-1.046 1.062a.15.15 0 0 0-.02.167l1.224 2.046c-.217.374-.39.773-.512 1.187l-2.25.471a.14.14 0 0 0-.109.138v1.5c0 .063.043.118.105.133l2.183.538c.113.485.292.952.533 1.387l-1.25 1.955a.14.14 0 0 0 0 .175l1.046 1.058a.13.13 0 0 0 .167 0l1.98-1.22c.39.23.81.408 1.25.528l.462 2.255c.012.063.068.11.133.108h1.48a.13.13 0 0 0 .128-.104l.555-2.255a5.2 5.2 0 0 0 1.287-.55l1.95 1.3c.05.04.121.04.171 0l1.046-1.058c.04-.05.04-.12 0-.17l-.692-1.188l-.229.075m-4.41-12.338v11.047m6.349-10.74l-4.218 5.217m4.234 5.39l-4.234-5.39m-2.13.26l2.13-.26"></svg:path>`,
})
export class ArcticonsKdeConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKdeconnectIcon],svg[arcticons-kdeconnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.22 4.69l-6.4.62V32l6.33-1V19.66l8.51 12.63l6.67-2.14L33.62 18L42.4 6.55L35.59 5l-8.44 11.42ZM12.71 11.2a.33.33 0 0 0-.2.09L10 13.84a.35.35 0 0 0-.05.4l2.94 4.91A13 13 0 0 0 11.66 22l-5.4 1.13a.34.34 0 0 0-.26.33v3.6a.33.33 0 0 0 .25.32l5.24 1.29A12.92 12.92 0 0 0 12.77 32l-3 4.69a.33.33 0 0 0 0 .42l2.51 2.54a.32.32 0 0 0 .4 0l4.75-2.93a12.32 12.32 0 0 0 3 1.27l1.11 5.41a.32.32 0 0 0 .32.26h3.55a.32.32 0 0 0 .31-.25L27.05 38a12.47 12.47 0 0 0 3.09-1.32l4.68 3.12a.33.33 0 0 0 .41 0l2.51-2.54a.33.33 0 0 0 0-.41L36.08 34l-.55.18c-.08 0 .42-1.39.13-1.86l-2.19-3.24c-1 4.09-5.77 6.94-9.72 6.94a10.25 10.25 0 0 1-10.18-10.34c0-4.2 3.27-9.2 7.25-9.86v-2.66a7.56 7.56 0 0 0-3.1 1.28h0l-4.8-3.18a.27.27 0 0 0-.21-.05Z"></svg:path>`,
})
export class ArcticonsKdeconnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKdriveIcon],svg[arcticons-kdrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3zm15.5 7v16m.002-3.399l7.242-7.207m-4.937 4.914L28 34.476"></svg:path>`,
})
export class ArcticonsKdriveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepIcon],svg[arcticons-keep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.37 5.5a2.82 2.82 0 0 0-2.78 2.86h0v31.07a2.83 2.83 0 0 0 4.7 2.35h0l.11-.1l.08-.09L24 28.07l13.57 13.56a2.82 2.82 0 1 0 4.06-3.91l-.08-.08L26 22.11a2.85 2.85 0 0 0-2-.86a2.8 2.8 0 0 0-2.14 1L11.23 32.86V8.36A2.82 2.82 0 0 0 8.45 5.5ZM28 24.07l13.52-13.59a2.83 2.83 0 0 0 0-4a2.87 2.87 0 0 0-2.11-.85h0a2.78 2.78 0 0 0-1.93.86L22 22.05"></svg:path>`,
})
export class ArcticonsKeepIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepAliveIcon],svg[arcticons-keep-alive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.207 20.5h-9.73A12 12 0 0 0 24 12a12 12 0 0 0-11.47 8.5H2.823m-.001 7h9.71A12 12 0 0 0 24 36a12 12 0 0 0 11.47-8.5h9.708"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 24h14.333l1.544-2.69l3.234 6.13L24 15.51l2.389 16.252L29.96 21.31L31.166 24H45.5"></svg:path>`,
})
export class ArcticonsKeepAliveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepScreenOnIcon],svg[arcticons-keep-screen-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.87 40.958H13.443A3.454 3.454 0 0 1 9.985 37.5V20.51a3.454 3.454 0 0 1 3.458-3.458H33.89a3.454 3.454 0 0 1 3.457 3.458v5.813"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.82 17.052v-3.354a6.85 6.85 0 0 1 6.847-6.847c1.883 0 3.607.77 4.836 2.01a6.8 6.8 0 0 1 2.01 4.837v3.354"></svg:path><svg:circle cx="33.98" cy="34.146" r="8.518" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.98 29.723v4.423m2.501 2.565l-2.501-2.565"></svg:path>`,
})
export class ArcticonsKeepScreenOnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepaIcon],svg[arcticons-keepa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.463 18.134H40.5a2 2 0 0 1 2 2v7.732a2 2 0 0 1-2 2H30.463a1.5 1.5 0 0 1-1.5-1.5v-8.732a1.5 1.5 0 0 1 1.5-1.5m-22.963 0h10.037a1.5 1.5 0 0 1 1.5 1.5v8.732a1.5 1.5 0 0 1-1.5 1.5H7.5a2 2 0 0 1-2-2v-7.732a2 2 0 0 1 2-2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.866 30.464V40.5a2 2 0 0 1-2 2h-7.732c-1.103 0-2-.896-2-2V30.464a1.5 1.5 0 0 1 1.5-1.5h8.732a1.5 1.5 0 0 1 1.5 1.5m0-22.964v10.036a1.5 1.5 0 0 1-1.5 1.5h-8.732a1.5 1.5 0 0 1-1.5-1.5V7.5a2 2 0 0 1 2-2h7.732c1.103 0 2 .896 2 2"></svg:path>`,
})
export class ArcticonsKeepaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepass2androidIcon],svg[arcticons-keepass2android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.15 20.67a3.07 3.07 0 1 1 3.06 3.07a3.07 3.07 0 0 1-3.06-3.07m18.64 3.07a3.07 3.07 0 1 1 3.07-3.07a3.07 3.07 0 0 1-3.07 3.07M24 30.47a2.61 2.61 0 0 1 1.59 4.69l1.24 4.31h-5.67l1.23-4.31A2.62 2.62 0 0 1 24 30.47"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.51 28.31V40a1.94 1.94 0 0 0 1.94 2h33.1a2 2 0 0 0 2-2V28.31"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39 13.72l2.58-2.56a3 3 0 0 0-4.27-4.26h0l-2.55 2.6a18.39 18.39 0 0 0-21.51 0l-2.57-2.57A3.22 3.22 0 0 0 8.5 6a3 3 0 0 0-2.12 5.15L9 13.71a18.4 18.4 0 0 0-3.47 10.8v3.8h37v-3.8A18.57 18.57 0 0 0 39 13.72m-19.87 7a2.93 2.93 0 1 1-2.93-2.92a2.93 2.93 0 0 1 2.94 2.9Zm12.65 2.92a2.92 2.92 0 1 1 2.92-2.92a2.92 2.92 0 0 1-2.91 2.9ZM5.51 34.97h13.77m9.44 0H42.5"></svg:path>`,
})
export class ArcticonsKeepass2androidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepass2androidofflineIcon],svg[arcticons-keepass2androidoffline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.33 30.79a7.37 7.37 0 1 0 7.37 7.36h0a7.36 7.36 0 0 0-7.35-7.36Zm3 10.24l-5.42.08a2.67 2.67 0 0 1-.11-5.33h.2l-1.13-1.16l7.63 7.53ZM36 35.8a2.84 2.84 0 0 1 3.86-1A2.9 2.9 0 0 1 41 35.88a5 5 0 0 1 .38.87a2.57 2.57 0 0 1 2.2 2.44A1.66 1.66 0 0 1 42.12 41h-.77m-28.2-20a3.07 3.07 0 1 1 3.06 3.07A3.07 3.07 0 0 1 13.15 21m18.64 3.06A3.07 3.07 0 1 1 34.86 21a3.08 3.08 0 0 1-3.07 3.07ZM24 30.79a2.61 2.61 0 0 1 1.59 4.69l1.24 4.31h-5.67l1.23-4.31A2.62 2.62 0 0 1 24 30.79m18.5 1.28v-3.44"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.51 28.63v11.73a1.94 1.94 0 0 0 1.94 2h24.7M39 14l2.58-2.56a3 3 0 1 0-4.28-4.26h0l-2.55 2.6a18.39 18.39 0 0 0-21.51 0l-2.56-2.53a3.22 3.22 0 0 0-2.18-.92a3 3 0 0 0-2.12 5.15L9 14a18.4 18.4 0 0 0-3.47 10.8v3.8h37v-3.8A18.57 18.57 0 0 0 39 14m-19.86 7a2.93 2.93 0 1 1-2.93-2.92A2.93 2.93 0 0 1 19.14 21m12.65 2.92A2.92 2.92 0 1 1 34.71 21a2.92 2.92 0 0 1-2.92 2.94ZM5.51 35.29h13.77m9.42 0h2.85"></svg:path>`,
})
export class ArcticonsKeepass2androidofflineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepassdroidIcon],svg[arcticons-keepassdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="33.04" height="23.12" x="7.48" y="18.89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 26a2.62 2.62 0 0 1 1.59 4.7l1.24 4.3h-5.66l1.24-4.3A2.62 2.62 0 0 1 24 26m-10.93-7.11v-4.58a10.93 10.93 0 0 1 21.86 0v4.58M7.48 30.45h12.21m8.62 0h12.21"></svg:path>`,
})
export class ArcticonsKeepassdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepassdxIcon],svg[arcticons-keepassdx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.89 5.5a9.61 9.61 0 1 1-4.31 18.19l-1.73 1.73l12.8 12.81v4.27h-4.27l-12.8-12.81V34h-4.27v4.27H15l-4.23 4.23H6.5v-4.27l12.81-12.81L6.5 12.61V8.35h4.27l12.81 12.8l1.74-1.74A9.59 9.59 0 0 1 33.89 5.5m3.92 7.12a2.85 2.85 0 1 0 2.84 2.84a2.85 2.85 0 0 0-2.84-2.84m-9.96 12.8l-4.27 4.27m0-8.54l-4.27 4.27"></svg:path>`,
})
export class ArcticonsKeepassdxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeeperPasswordManagerIcon],svg[arcticons-keeper-password-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 1.04-.07 2.07-.22 3.07q-.165 1.215-.48 2.37c-.34 1.31-.8 2.57-1.37 3.77q-.645 1.365-1.47 2.61c-.76 1.15-1.63 2.23-2.6 3.21q-.15.18-.33.33c-.98.97-2.06 1.84-3.21 2.6q-1.245.825-2.61 1.47c-1.91.91-3.97 1.54-6.14 1.85c-1 .15-2.03.22-3.07.22s-2.07-.07-3.07-.22c-2.17-.31-4.23-.94-6.14-1.85a21.4 21.4 0 0 1-5.82-4.07q-.18-.15-.33-.33a21.4 21.4 0 0 1-4.07-5.82c-.91-1.91-1.54-3.97-1.85-6.14c-.15-1-.22-2.03-.22-3.07s.07-2.07.22-3.07c.31-2.17.94-4.23 1.85-6.14c1.03-2.17 2.41-4.13 4.07-5.82q.15-.18.33-.33c1.69-1.66 3.65-3.04 5.82-4.07c1.91-.91 3.97-1.54 6.14-1.85c1-.15 2.03-.22 3.07-.22s2.07.07 3.07.22c2.17.31 4.23.94 6.14 1.85q1.365.645 2.61 1.47c1.15.76 2.23 1.63 3.21 2.6q.18.15.33.33c.97.98 1.84 2.06 2.6 3.21q.825 1.245 1.47 2.61c.57 1.19 1.03 2.45 1.37 3.76c.21.77.37 1.57.48 2.38c.15 1 .22 2.03.22 3.07M8.64 38.947V9.053M39.36 33.22v-.01m0-18.42v-.01M14.79 43.285V4.715M33.21 39.36v-.01m0-30.7v-.01m.01 0h-.01m.01 30.72h-.01m6.15-24.57h-.01m.01 18.42h-.01"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.611 41.751L33.22 39.36h-.01v-.01l-6.14-6.14v11.965"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.724 35.584L39.36 33.22l-.01-.01l-6.14-6.14H20.93v17.961M35.627 6.233L33.22 8.64l-.01.01l-6.14 6.14V3.026"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.788 12.352L39.36 14.78v.01h-.01l-6.14 6.14H20.93V2.78m23.734 26.524L39.36 24l5.321-5.331"></svg:path>`,
})
export class ArcticonsKeeperPasswordManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeeponIcon],svg[arcticons-keepon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5a13.51 13.51 0 0 0-13.41 13.41c0 8 7.32 11.07 7.32 15.24v1.21h12.18v-1.21c0-4.15 7.32-7.2 7.32-15.24A13.51 13.51 0 0 0 24 4.5m-6.09 29.86h12.18v4.57H17.91Zm0 4.57h12.18v4.57H17.91Z"></svg:path><svg:circle cx="23.95" cy="17.88" r="1.23" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.95 16.65v-4.97m1.04 6.87l6.02 3.85"></svg:path><svg:circle cx="24" cy="17.91" r="10.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKeeponIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeeproUnlockerIcon],svg[arcticons-keepro-unlocker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43 17.077c0-5.654-4.584-10.238-10.238-10.238c-3.722 0-6.97 1.993-8.762 4.964c-1.792-2.97-5.04-4.964-8.763-4.964C9.583 6.84 5 11.423 5 17.077c0 1.292.25 2.524.687 3.662C9.072 30.476 24 41.161 24 41.161s14.928-10.685 18.313-20.422A10.2 10.2 0 0 0 43 17.077"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.815 17.584a3.5 3.5 0 1 0-7 0c0 1.491.936 2.756 2.25 3.26v2.402a1.25 1.25 0 0 0 2.5 0v-2.402a3.49 3.49 0 0 0 2.25-3.26"></svg:path>`,
})
export class ArcticonsKeeproUnlockerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepsafeIcon],svg[arcticons-keepsafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.96 32.52V15.48h6.547V7.038H5.5v33.924h15.007V32.52z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.487 30.292L42.5 7.038H31.129L15.802 24l15.327 16.962H42.5L21.487 17.708"></svg:path>`,
})
export class ArcticonsKeepsafeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepscreenIcon],svg[arcticons-keepscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.853 35.444h.119a.6.6 0 0 0 .233-.045a1.305 1.305 0 0 0 .692-1.311c-.232-.864.692-2.26 1.509-3.159a11.92 11.92 0 0 0 4.555-9.268a11.018 11.018 0 0 0-22.035-.001a11.88 11.88 0 0 0 4.542 9.27a.01.01 0 0 0 .011.01c.42.467 1.638 1.909 1.557 3.09a1.7 1.7 0 0 0 .83 1.37a.6.6 0 0 0 .165.048v5.164a.8.8 0 0 0 .796.806h.023a3.336 3.336 0 0 0 6.183 0h.025a.8.8 0 0 0 .795-.806Zm-8.647 1.051h9.467m-9.467 3.47h9.467m-9.467-1.735h9.467M24.025 4.5l-.008 4.364m-12.306.666l3.081 3.091M36.288 9.65l-3.091 3.081"></svg:path>`,
})
export class ArcticonsKeepscreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeetaIcon],svg[arcticons-keeta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 14.1v15.946m6.332-12.386c-1.488 2.374-2.25 4.782-6.332 7.037"></svg:path><svg:path d="M8.058 22.932s2.526 11.864 15.303 10.913m7.478-4.135c-.855.879-1.738 1.747-3.038 2.468m-1.336.683c-.48.21-.97.401-1.483.556"></svg:path><svg:path d="M14.31 25.54s5.334-1.64 5.334-4.362c0-3.295-5.309-3.518-5.309-.408l-.076 6.533c-.024 2.078 4.572 2.743 5.84-.316m2.689-1.447s5.334-1.64 5.334-4.362c0-3.295-5.31-3.518-5.31-.408l-.075 6.533c-.025 2.078 4.571 2.743 5.839-.316m13.873-4.888s-5.334 1.64-5.334 4.362c0 3.296 5.31 3.519 5.31.409l.075-6.533c.024-2.078-4.572-2.744-5.84.316m-7.226-2.022h5.793m-2.735-4.337v12.741c.024 2.127 2.695 2.018 2.695 2.018"></svg:path></svg:g>`,
})
export class ArcticonsKeetaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeksPayIcon],svg[arcticons-keks-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 5.5v5.864m0 6.772V24M24 14.364h-6.25m-3 9.636v5.864m0 6.772V42.5M24 32.864h-6.25m15.5 3.818H24m18.5-7.25h-9.25m9.25-11.057h-9.25m9.25-7.25h-9.25"></svg:path><svg:rect width="18.5" height="18.5" x="5.5" y="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="18.5" height="18.5" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="18.5" height="18.5" x="24" y="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="18.5" height="18.5" x="24" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect>`,
})
export class ArcticonsKeksPayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKenaMobileIcon],svg[arcticons-kena-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.062 13.625a14.938 14.938 0 1 0 29.876 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.938 43.5a14.938 14.938 0 0 0-29.876 0"></svg:path><svg:circle cx="24" cy="13.625" r="4.277" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.062 6.613h6.51m16.856 0h6.51L36.825 4.5"></svg:path>`,
})
export class ArcticonsKenaMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKenkoIcon],svg[arcticons-kenko-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.001 32.5c0-9.389 7.61-17 16.999-17s16.999 7.611 16.999 17z"></svg:path>`,
})
export class ArcticonsKenkoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeralaPoliceIcon],svg[arcticons-kerala-police-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.116 16.485v5.742h2.871m4.889-1.921h-2.488m-.62 1.903l1.866-5.724l1.866 5.742m-19.481 0v-5.742h1.88c1.062 0 1.924.863 1.924 1.928s-.862 1.928-1.924 1.928h-1.88m1.88.001l1.881 1.883M9.5 16.485v5.742m3.086 0l-2.361-2.871l2.361-2.852m-2.361 2.852H9.5m4.867 0h1.872m.999 2.871h-2.871v-5.742h2.871m10.473 3.821h-2.488m-.62 1.903l1.866-5.724l1.866 5.742m-6.263 3.546v5.742h2.871m1.918-5.742v5.742m-16.235 0v-5.742h1.88c1.063 0 1.924.863 1.924 1.928s-.861 1.929-1.924 1.929h-1.88m21.956-.04v.023a1.902 1.902 0 1 1-3.804 0v-1.938c0-1.05.852-1.902 1.902-1.902h0c1.05 0 1.902.852 1.902 1.902v.024m1.917.945h1.872m.999 2.871h-2.871v-5.742h2.871m-19.117 5.742a1.9 1.9 0 0 1-1.902-1.902v-1.938a1.902 1.902 0 1 1 3.804 0v1.938c0 1.05-.851 1.902-1.902 1.902"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsKeralaPoliceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeralaTourismIcon],svg[arcticons-kerala-tourism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.752 25.307c.302-1.007 2-.91 2.655-.28c.706 1.312.161 3.396.33 5.533"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.736 28.682c-2.506 3.65-6.111-1.688-1.61-1.9m-18.467 1.711c1.101-.931 2.308-1.69 2.916-2.441c-.132-1.192-2.233-1.492-3.212-1.06c-4 1.766-.432 7.559 2.893 4.705m1.831-5.139v6.313m0-5.245c.687-.738 1.643-1.111 2.59-.628m3.121-10.48c2.87 4.714 5.224 10.633 3.866 16.226m-3.866-16.226c-.969 1.515-1.067 3.633.114 5.11m-.114-5.11c-1.664-1.536-3.04 1.034-2.495 2.555m2.495-2.555c-.861-2.59 1.6-4.297 2.848-1.523"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.798 14.518c-.494-1.855-2.608-3.834-4.023-1.696m4.023 1.696c2.165-2.185 2.832 1.096 3.01 2.805m-4.631 8.247c.303-1.008 2-.91 2.656-.28c.706 1.311.161 3.395.33 5.532"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.162 28.944c-2.506 3.65-6.111-1.688-1.61-1.9M4.5 33.06c1.206.196 2.868-.428 3.778-1.205h0c2.427 1.92 5.922 2.088 8.579.386"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.856 32.241c2.03 1.576 5.235.973 7.396-.308v0c1.81 1.883 5.327 1.424 7.301-.078h0c1.78 1.693 5.258 1.233 6.914-.447h0c1.272 1.282 3.417 1.145 5.033.636m-34.613 3.3c2.097 1.308 5.663 1.598 7.383-.397v0c1.57 2.109 6.006 1.845 7.658-.044v-.001c2.053 1.89 6.081 1.342 7.97-.63h0c1.27 2.08 5.191 1.741 6.46-.166M8.893 19.877v10.682m3.766-5.769c-4.643-.446-5.018 5.422-.216 5.234"></svg:path>`,
})
export class ArcticonsKeralaTourismIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKernelFlasherIcon],svg[arcticons-kernel-flasher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.125 10.125h27.75v27.75h-27.75z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.375 19.375h9.25v9.25h-9.25zm0-13.875v4.625m9.25-4.625v4.625M5.5 19.375h4.625M5.5 28.625h4.625m9.25 9.25V42.5m9.25-4.625V42.5m9.25-23.125H42.5m-4.625 9.25H42.5"></svg:path>`,
})
export class ArcticonsKernelFlasherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKernelsuIcon],svg[arcticons-kernelsu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="13" x="26" y="9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="13" height="13" x="9" y="26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsKernelsuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKerryExpressIcon],svg[arcticons-kerry-express-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.22 38.9L19.126 22.218L43.5 9.17m-39-.865v31.39m0-9.666l14.687-7.856"></svg:path>`,
})
export class ArcticonsKerryExpressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKetoMojoIcon],svg[arcticons-keto-mojo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.619 27.459a3.32 3.32 0 0 1-2.285-.907L10.431 19.1a3.33 3.33 0 1 1 4.557-4.857l.012.012l5.492 5.178L33.927 5.314a3.33 3.33 0 1 1 4.824 4.59h0l-15.72 16.52a3.32 3.32 0 0 1-2.412 1.035m7.874.923a3.33 3.33 0 0 0-2.278-.9h-.727l-2.457 2.582a3.33 3.33 0 0 1-4.697.127l-2.873-2.71h-3.8a3.33 3.33 0 0 0-3.33 3.33v8.648a3.33 3.33 0 0 0 6.66 0V34.14h9.908l9.163 8.592a3.33 3.33 0 0 0 4.555-4.86Z"></svg:path><svg:circle cx="20.619" cy="10.461" r="4.062" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKetoMojoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKexpIcon],svg[arcticons-kexp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.426 43.5v-8.83h2.89c1.635 0 2.96 1.328 2.96 2.966s-1.325 2.965-2.96 2.965h-2.89m-9.08-5.931l5.85 8.83m0-8.83l-5.85 8.83M16.7 39.085h2.88m1.535 4.415h-4.414v-8.83h4.414m-12.391 0v8.83m0-3.075L13.47 34.7m0 8.8l-3.635-4.415"></svg:path><svg:rect width="4.967" height="23.544" x="8.767" y="7.471" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".552" ry=".552"></svg:rect><svg:rect width="4.967" height="16.897" x="17.24" y="14.118" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".552" ry=".552"></svg:rect><svg:rect width="4.967" height="21.062" x="34.187" y="9.954" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".552" ry=".552"></svg:rect><svg:rect width="4.967" height="26.516" x="25.713" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".552" ry=".552"></svg:rect>`,
})
export class ArcticonsKexpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyIcon],svg[arcticons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13.05" cy="24" r="8.55" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 32.55V24h0h-21.91m16.3 4.93V24"></svg:path>`,
})
export class ArcticonsKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyAttestationIcon],svg[arcticons-key-attestation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.68 15.457c0 4.747-3.846 8.597-8.59 8.597h0c-4.744 0-8.59-3.85-8.59-8.597h0c0-4.748 3.845-8.598 8.589-8.598h.001c4.744 0 8.59 3.849 8.59 8.597zm-.05-.901l19.87-2.797m-5.382.758l.812 5.778M17.019 34.701l6.434 6.44l11.56-11.569"></svg:path>`,
})
export class ArcticonsKeyAttestationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyDriverIcon],svg[arcticons-key-driver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18.197" height="30.248" x="14.902" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:circle cx="24" cy="20.95" r="4.881" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.09 34.748h11.82V42.5a1 1 0 0 1-1 1h-9.82a1 1 0 0 1-1-1zm2.551 0v7.215m2.35-7.215v5.995m2.35-5.995v5.995m2.35-5.995v7.215"></svg:path>`,
})
export class ArcticonsKeyDriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeybankIcon],svg[arcticons-keybank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.242 25.805a1.72 1.72 0 0 1-1.701-1.769c0-1.005.76-1.773 1.7-1.773c.51 0 .878.37 1.324-.08s.083-.815.083-1.333c0-.945.76-1.713 1.761-1.713c.998 0 1.762.768 1.762 1.713c0 .517-.37.884.075 1.334c.454.454.817.08 1.33.08c.938 0 1.702.767 1.702 1.772a1.72 1.72 0 0 1-1.701 1.769c-.514 0-.881-.37-1.327.083c-.454.45-.08.816-.08 1.334c0 .945-.763 1.709-1.76 1.709a1.72 1.72 0 0 1-1.762-1.678v-.03c0-.518.366-.885-.08-1.335c-.453-.454-.816-.083-1.326-.083m3.227-10.803a4.43 4.43 0 0 0-4.43 4.559H8.9c-2.43 0-4.399 1.995-4.399 4.456a4.43 4.43 0 0 0 4.543 4.449l-.007.143a4.43 4.43 0 0 0 8.86-.143h0l.14.007a4.4 4.4 0 0 0 3.96-2.517H32.91a1.448 1.448 0 0 1-1.584 2.143v4.903h3.769v-4.143c0-.665.529-1.202 1.19-1.202h.114c.661 0 1.194.537 1.194 1.202v4.143h3.765v-4.899a1.444 1.444 0 0 1-1.584-2.143h1.342c.349 0 .695-.064 1.02-.189c.81-.31 1.365-.979 1.365-1.754c0-1.077-1.062-1.939-2.385-1.939H21.997a4.4 4.4 0 0 0-4.102-2.513v-.14a4.42 4.42 0 0 0-4.418-4.426h-.008z"></svg:path>`,
})
export class ArcticonsKeybankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeybaseIcon],svg[arcticons-keybase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.42 6.34a4.8 4.8 0 0 1 1.89.08a3.65 3.65 0 0 1-.08 1.88a3.35 3.35 0 0 1-1.89-.08a4.1 4.1 0 0 1 .08-1.88m2.48 4.1c-1.56.12-4.18-.11-4.49-.5c-.4-.63-.23-5.25.24-5.57s5.11-.15 5.57.25a4.6 4.6 0 0 1 .26 2.13m6 9.29l5.1 6.3c.93 1.32-1.23 3-2.41 1.58l-1 .87c-1.31.93-1.62.24-2.22-.55s-1.54-1.46-.37-2.34c-.39-.11-1.74-.92-.43-2.54l-1.35-1.92C21 16 23.47 14.76 24.52 16Zm1.39 1.4c3.33-2.77 4.94-10.34-4.52-10.88c-1.33-.17.24-3.58.3-4.06c-9.36 11-3.05 15.11.7 15.85m8.25 18.72a1.65 1.65 0 1 1-1.6-1.65a1.65 1.65 0 0 1 1.64 1.65Zm-9.93 0a1.65 1.65 0 1 1-1.65-1.65a1.65 1.65 0 0 1 1.69 1.65Zm-2.28-20.82C12.47 18 4.58 23.51 5.28 38.49c5.85-6.11 11.84-15.55 12.11-15.72c-4.74 9.16-5.83 11.7-5.92 12.57c11.61-13.71 30.39 5 26.59-12.18M7.43 36.35a13.2 13.2 0 0 0 1 2.77a16 16 0 0 0 1.39 2.56m28.45 0c.21-.34.42-.68.61-1A16.92 16.92 0 0 0 27.58 16m10.66 25.7A22 22 0 0 0 45.5 26A21.51 21.51 0 0 0 24 4.46a21 21 0 0 0-2.74.18m-1.51.24c-.4.08-.79.17-1.18.27M12.18 8A21.52 21.52 0 0 0 5 36.11"></svg:path>`,
})
export class ArcticonsKeybaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyboardIcon],svg[arcticons-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.14 14.94v4.53h4.53v-4.53Zm6.8 0v4.53h4.53v-4.53Zm6.79 0v4.53h4.54v-4.53Zm6.8 0v4.53h4.53v-4.53Zm6.8 0v4.53h4.53v-4.53ZM8.14 21.73v4.54h4.53v-4.54Zm6.8 0v4.54h4.53v-4.54Zm6.79 0v4.54h4.54v-4.54Zm6.8 0v4.54h4.53v-4.54Zm6.8 0v4.54h4.53v-4.54Zm-27.19 6.8v4.53h4.53v-4.53Zm6.8 0v4.53h18.12v-4.53Zm20.39 0v4.53h4.53v-4.53Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2v23a2 2 0 0 0 2 2h35a2 2 0 0 0 2-2"></svg:path>`,
})
export class ArcticonsKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyboard69Icon],svg[arcticons-keyboard69-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="10.87" r="2.77" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 16.11v20.43a3.36 3.36 0 0 1-3.36 3.37h0A3.35 3.35 0 0 1 37 37.6l-6.28-18.83A3.89 3.89 0 0 0 27 16.11h-3v23.8h-3a3.9 3.9 0 0 1-3.69-2.67l-6.26-18.83a3.36 3.36 0 0 0-3.19-2.3h0a3.35 3.35 0 0 0-3.36 3.36V39.9"></svg:path>`,
})
export class ArcticonsKeyboard69Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyboardswitcherIcon],svg[arcticons-keyboardswitcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.1 18.294v4.143h4.143v-4.143Zm6.214 0v4.143h4.143v-4.143Zm6.215 0v4.143h4.142v-4.143Zm6.214 0v4.143h4.143v-4.143Zm6.214 0v4.143H41.1v-4.143ZM12.1 24.508v4.143h4.143v-4.143Zm6.214 0v4.143h4.143v-4.143Zm6.215 0v4.143h4.142v-4.143Zm6.214 0v4.143h4.143v-4.143Zm6.214 0v4.143H41.1v-4.143ZM12.1 30.723v4.142h4.143v-4.143Zm6.214 0v4.142h16.572v-4.143Zm18.643 0v4.142H41.1v-4.143Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 36.546V16.613a1.733 1.733 0 0 0-1.733-1.733H11.433A1.733 1.733 0 0 0 9.7 16.613v19.933a1.733 1.733 0 0 0 1.733 1.734h30.334a1.733 1.733 0 0 0 1.733-1.734"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.3 14.88v-3.426a1.733 1.733 0 0 0-1.733-1.734H6.233A1.733 1.733 0 0 0 4.5 11.454v19.933a1.733 1.733 0 0 0 1.733 1.733H9.7"></svg:path>`,
})
export class ArcticonsKeyboardswitcherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeychainIcon],svg[arcticons-keychain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.541 9.713a3.746 3.746 0 0 1 3.746 3.745h0a3.746 3.746 0 1 1-3.746-3.745M13.795 24h20.41m-20.41 6.319h20.41m-20.41 6.319h20.41"></svg:path><svg:rect width="31" height="39" x="8.45" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsKeychainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeycipIcon],svg[arcticons-keycip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.567 24.827h2.898v2.898h-2.898zm4.984 0h2.898v2.898h-2.898zm4.984 0h2.898v2.898h-2.898zm4.985 0h2.898v2.898H32.52zm-19.938 4.984h2.898v2.898h-2.898zm4.985 0h2.898v2.898h-2.898zm4.984 0h2.898v2.898h-2.898zm4.984 0h2.898v2.898h-2.898zm4.985 0h2.898v2.898H32.52z"></svg:path><svg:rect width="32.457" height="22.024" x="7.771" y="20.476" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.012"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.316 20.476c-.403-20.261 25.103-19.672 24.717 0M17.625 36.695h12.751v2.898H17.625zm-5.043-11.868h2.898v2.898h-2.898z"></svg:path>`,
})
export class ArcticonsKeycipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeylimbaIcon],svg[arcticons-keylimba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="16.423" cy="20.153" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.423" ry="2.692"></svg:ellipse><svg:ellipse cx="31.577" cy="20.153" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.423" ry="2.692"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.671 27.46c-1.328 1.84-3.335 3.08-6.671 3.08s-5.343-1.238-6.671-3.08"></svg:path>`,
})
export class ArcticonsKeylimbaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeymIcon],svg[arcticons-keym-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.554 5.5v37m6.633-37L9.73 24l4.457 18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.669 5.5L12.784 24l8.886 18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.276 5.5L16.656 24l13.62 18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.446 5.5L21.946 24l18.5 18.5"></svg:path>`,
})
export class ArcticonsKeymIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeymanIcon],svg[arcticons-keyman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.29 9.71a1.9 1.9 0 0 0-1.437.654c-1.834 2.1-3.62 3.585-6.495 4.153c-.338.067-1.197.117-1.396.316a.597.597 0 0 0 .122 1.022l9.74 4.296a.96.96 0 0 0 .481.077a11.7 11.7 0 0 0 8.981-6.36a.956.956 0 0 0-.568-1.357l-8.866-2.718a1.9 1.9 0 0 0-.56-.082Zm19.686 12.013l-6.254-6.553a.956.956 0 0 0-1.526.194a14.3 14.3 0 0 1-8.584 6.901a.956.956 0 0 0-.668 1.175l3.735 12.892a1.163 1.163 0 0 0 2.012.295L43 24.337a1.924 1.924 0 0 0-.023-2.613Zm-31.73-4.428a.96.96 0 0 0-.814.433L4.804 26.32a1.93 1.93 0 0 0 .81 2.785l19.837 9.03c1.19.542 1.92-.424 1.611-1.553L23.33 22.928a.96.96 0 0 0-.536-.621l-11.175-4.93a1 1 0 0 0-.372-.082"></svg:path>`,
})
export class ArcticonsKeymanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeymapperIcon],svg[arcticons-keymapper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="22.576" height="22.576" x="19.674" y="5.814" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.509"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.826 28.39v11.288a2.503 2.503 0 0 1-2.508 2.508H7.758a2.503 2.503 0 0 1-2.508-2.508v-17.56a2.503 2.503 0 0 1 2.508-2.508h11.916"></svg:path><svg:rect width="17.559" height="10.034" x="22.182" y="12.085" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.254"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.826 19.986h6.272"></svg:path><svg:circle cx="25.945" cy="14.28" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.453" cy="14.28" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.962" cy="14.28" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.47" cy="14.28" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.979" cy="14.28" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.979" cy="16.788" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.47" cy="16.788" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.962" cy="16.788" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.453" cy="16.788" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.945" cy="16.788" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.03 39.678h5.017v-3.763l-2.509-2.508l-2.508 2.508Zm-5.644-5.644h3.762l2.509-2.509l-2.383-2.508H8.386Zm16.304 0h-3.762l-2.508-2.509l2.383-2.508h3.888ZM14.03 23.373h5.017v3.763l-2.509 2.508l-2.508-2.508Z"></svg:path>`,
})
export class ArcticonsKeymapperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyoxideIcon],svg[arcticons-keyoxide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.038" cy="9.886" r="1.363" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="25.188" cy="6.478" r=".977" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="22.288" cy="5.153" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.75 34.862l-8.498-6.356l8.498-6.355a4.85 4.85 0 0 0 .979-6.79a5 5 0 0 0-.36-.42a1.646 1.646 0 1 0-2.099-1.292a4.9 4.9 0 0 0-1.951-.185a2.594 2.594 0 1 0-2.729 1.18l-5.585 4.177v-.555a4.85 4.85 0 1 0-9.7 0v20.48a4.85 4.85 0 1 0 9.7 0v-.554l5.935 4.438a4.85 4.85 0 1 0 5.81-7.768"></svg:path>`,
})
export class ArcticonsKeyoxideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeypassIcon],svg[arcticons-keypass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.462 6.553h4.814L14.027 4.5h19.258l2.751 2.053h5.502V22.29c0 15.731-17.882 21.21-17.882 21.21S6.462 38.066 6.462 22.29Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.778 18.868h13.756v7.527c0 3.225-3.636 6.842-6.878 6.842s-6.878-3.617-6.878-6.842Zm6.878 4.79v3.474"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.842 18.868v-2.79a5.4 5.4 0 0 1 4.814-4.788a5.4 5.4 0 0 1 4.815 4.79v2.79"></svg:path>`,
})
export class ArcticonsKeypassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeysCafeRgbKeyboardIcon],svg[arcticons-keys-cafe-rgb-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.107 17.204l3.297-3.335c.473-.549.66-1.04.66-1.576a2.246 2.246 0 0 0-3.956-1.454a2.246 2.246 0 0 0-3.96 1.454c0 .538.19 1.032.66 1.576zm3.58 7.306a3.58 3.58 0 0 1-3.58 3.58h0a3.58 3.58 0 1 1 3.58-3.579h0M27.579 13.624a3.58 3.58 0 1 1-7.164-.002a3.58 3.58 0 0 1 7.165.003m-11.105 0a3.58 3.58 0 1 1-7.163-.002a3.58 3.58 0 0 1 7.163.003M27.582 24.51a3.58 3.58 0 1 1-7.16-.002a3.58 3.58 0 0 1 7.16.003m-11.106 0a3.58 3.58 0 1 1-7.163-.002a3.58 3.58 0 0 1 7.163.003m-4.212 7.225h23.478a3.19 3.19 0 0 1 3.196 3.183v.678a3.19 3.19 0 0 1-3.182 3.197H12.26a3.19 3.19 0 0 1-3.197-3.183v-.678a3.19 3.19 0 0 1 3.183-3.197h.014M12.534 5.5h22.932a7.02 7.02 0 0 1 7.033 7.007v22.96a7.02 7.02 0 0 1-7.007 7.033H12.535A7.02 7.02 0 0 1 5.5 35.493v-22.96A7.02 7.02 0 0 1 12.508 5.5z"></svg:path>`,
})
export class ArcticonsKeysCafeRgbKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyshIcon],svg[arcticons-keysh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 30.493h39v-3.118h-6.25v-9.868H11.23v9.868H4.5z"></svg:path>`,
})
export class ArcticonsKeyshIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeysmithIcon],svg[arcticons-keysmith-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="29.181" r="14.319" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.619 18.366V13.88a9.381 9.381 0 0 1 18.762 0v4.371"></svg:path><svg:circle cx="24" cy="29.181" r="4.938" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 20.894v-2.682m5.86 5.11l1.896-1.897m.531 7.756h2.682m-5.109 5.86l1.896 1.897m-7.756.53v2.682m-5.86-5.109l-1.896 1.897m-.531-7.757h-2.682m5.109-5.859l-1.896-1.897M24 14.863v1.328"></svg:path>`,
})
export class ArcticonsKeysmithIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyspaceIcon],svg[arcticons-keyspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.021 5L5.81 13.893l18.054 7.98l18.328-7.98z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.81 13.893v4.342l18.053 8.66l18.328-8.66v-4.342m-18.328 7.98v5.021"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.239 20.102l3.952 1.771l-18.328 8.78l-18.054-8.601l3.893-1.95"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.19 21.873v4.458L23.864 34.96L5.809 26.331v-4.28m18.054 8.601v4.307"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.284 28.187l3.907 1.734l-18.328 8.872l-18.028-8.846l3.857-1.76"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.19 29.921v4.36L23.864 43L5.809 34.179v-4.232m18.054 8.846V43"></svg:path>`,
})
export class ArcticonsKeyspaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKfcIcon],svg[arcticons-kfc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.746 23.278c.326-2.45 2.204-2.572 2.693-1.388s-.204 8.897-3.877 8.285c.082 3.55-1.02 7.795-3.469 8.938s-4.612 3.02-4.979 5.387c-1.837-1.388-9.142-4.571-10.57-13.162c-.776-.102-4.204-4.143-3.796-7.49s1.995-2.839 2.974-1.737"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.443 21.608c.795-1.235 1.297-3.232 1.221-4.738c-.408-8.122-6.53-12.897-12.517-13.346c-5.988-.449-8.91 5.51-11.807 4.571c2.245 3.102 3.755.612 7.02.653s4.787 2.327 4.787 2.327"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.685 9.653s-2.284 1.36-3.97.993c.42 1.408 1.625 2.55 1.625 2.55c-1.674 1.286-1.918 2.164-1.918 2.164c.102 1.918 1.918 6.01 1.918 6.01m11.047-11.115c-4.089-1.609-8.702 2.493-9.966 9.798m0 0s6.51.041 6.959.245s1.755.653 1.796 2.653s-1.102 2.939-2.327 3.265m13.958-6.008H27.89c-1.469 0-3.795.498-2.652 3.56"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.95 25.91c1.674-.245 3.53-2.365 1.98-5.702m-15.754 5.396c-2.391-1.08-3.584-3.263-1.247-5.324"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.544 31.338c-.98-3.204-1.067-5.104-.35-7.276m13.016 3.474c.598-.572 0-1.184 0-1.184"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.746 27.536c-.06 1.646 2.539 2.013 2.539 2.013m12.657 2.816c.39 1.02.158 2.789.158 2.789m-6.176.245c-.245-.721-1.468-1.23-2.258-1.261"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.312 34.623c.122-.857.204-1.537 1.156-2.163c1.592 1.415 1.864 3.7 1.592 5.034s-.62 2.522.03 4.308m5.94-19.568s1.41-.247 2.34.295m-11.571.259c1.03-.96 2.663-.381 2.663-.381m3.712 7.441c-1.116-1.605-2.293-1.459-3.307-.896c-.723.402-.965 1.685-2.407 1.55c.952 1.605 3.514 2.23 5.714.435"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.174 29.848c1.115-1.605 2.292-1.459 3.306-.896c.724.402.965 1.685 2.407 1.55c-.952 1.605-3.514 2.23-5.714.435m2.074 11.066c.704-1.074.255-2.727.255-2.727m-4.467-17.289c.794-.587 2.145-.882 2.918 0m7.97-8.028c.136 3.319 3.191 6.249 3.191 6.249M21.64 25.006c-.47.857-.807 2.719.395 3.556"></svg:path>`,
})
export class ArcticonsKfcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKfcAltIcon],svg[arcticons-kfc-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.73 25.971l-.008.05c-.388 2.2-2.487 3.985-4.688 3.985h0c-2.201 0-3.671-1.785-3.283-3.986l.716-4.06c.388-2.202 2.487-3.986 4.688-3.986h0c2.201 0 3.67 1.784 3.283 3.986l-.009.049m-24.808-4.015L10.5 30.026m.739-4.191l7.842-7.8m-2.114 11.991l-3.893-6.016m8.087-.02h3.911m-4.971 6.016l2.121-12.032h6.016"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsKfcAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKfhonlineIcon],svg[arcticons-kfhonline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.997 8.3A1.697 1.697 0 0 0 8.3 9.997v28.006A1.697 1.697 0 0 0 9.997 39.7h28.006a1.697 1.697 0 0 0 1.697-1.697V9.997A1.697 1.697 0 0 0 38.003 8.3Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.2 2.997a1.697 1.697 0 0 0-2.4 0L2.997 22.8a1.697 1.697 0 0 0 0 2.4L22.8 45.003a1.697 1.697 0 0 0 2.4 0L45.003 25.2a1.697 1.697 0 0 0 0-2.4Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.762 32.238h16.476V15.762"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.762 24.255h8.493v-8.493"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.762 15.762h4.502v4.502h-4.502zm0 12.485h12.485V15.762"></svg:path>`,
})
export class ArcticonsKfhonlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKhaltiIcon],svg[arcticons-khalti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.87 7.45h15.42a1.57 1.57 0 0 1 1.56 1.74l-2.35 22a2.1 2.1 0 0 1-1 1.58l-12.28 7.4a2.6 2.6 0 0 1-2.69 0l-12.29-7.36a2.1 2.1 0 0 1-1-1.58l-2.35-22a1.58 1.58 0 0 1 1.57-1.78z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.29 12.88l-5.43.58l1.12 10.45l5.42-.58m10.39-11.17v18.92m10.17 0l-7.79-9.46l7.79-9.4m-7.79 9.4h-2.38"></svg:path>`,
})
export class ArcticonsKhaltiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKhanAcademyIcon],svg[arcticons-khan-academy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.017 43.5L7.03 33.764l-.017-19.5L23.982 4.5l16.989 9.736l.017 19.5Z"></svg:path><svg:circle cx="24.031" cy="16.866" r="3.689" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.754 20.98a13.703 13.703 0 1 1-27.301 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.453 20.98A13.703 13.703 0 0 1 24.18 34.681m.11-.001a13.703 13.703 0 0 1 13.464-13.7"></svg:path>`,
})
export class ArcticonsKhanAcademyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKhanAcademyViewerIcon],svg[arcticons-khan-academy-viewer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.746 30.587c.132.191.266.35.362.53c.198.37.21.731-.097 1.062c-.13.141-.247.295-.373.44c-.455.518-.575 1.053-.21 1.697c.183.324.287.718.33 1.091c.156 1.374-.361 2.218-1.714 2.513c-1.01.22-2.07.23-3.11.295c-.718.045-1.442.002-2.162.04c-.483.027-.795.345-.88.806c-.15.81-.289 1.626-.36 2.445c-.084.97-.118 1.947-.12 2.92c-.001.488-.195.585-.633.573c-3.08-.088-6.014-.802-8.813-2.061c-2.757-1.241-5.126-3.032-7.16-5.262c-.155-.17-.268-.487-.23-.706c.287-1.662-.029-3.219-.852-4.652c-.955-1.662-1.892-3.35-3.022-4.891c-1.553-2.12-2.492-4.455-3.096-6.98c-1.053-4.402.891-10.9 4.413-13.923c2.045-1.755 4.404-2.8 7.03-3.218c3.772-.601 7.508-.304 11.164.779c1.59.47 3.066 1.226 4.433 2.178c1.418.987 2.439 2.23 2.825 3.974c.357 1.61.818 3.196 1.24 4.79c.241.91.52 1.81.736 2.725c.13.553.084 1.107-.207 1.631c-.06.108.01.333.087.463a486 486 0 0 0 3.03 5c.314.511.402 1.03.25 1.608c-.137.519-.356.68-.899.725a7 7 0 0 0-1.255.226c-.34.092-.47.328-.286.682c.094.182.162.379.228.574c.331.98.21 1.349-.649 1.926"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.655 11.573c1.03 2.243 2.905 7.759-1.728 7.52c-1.128-.058-4.872.055-6.25.754c-3.041 1.54-5.61 3.537-9.506 3.824c-4.247.312-5.093-4.533-5.093-6.325c0-6.582 4.746-10.44 9.506-10.59c8.77-.275 11.535 1.47 13.071 4.817"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.774 6.883c.337.769.536 1.788.596 2.972a18.3 18.3 0 0 1-.164 3.215a23 23 0 0 1-.389 2.065c-.164.7-.363 1.374-.579 2.013a17.3 17.3 0 0 1-1.296 2.947c-.216.38-.44.734-.665 1.054c0 .009-.01.009-.01.009m-3.663 1.771c-.924-.588-1.477-2.152-1.573-4.234c-.051-.977 0-2.065.165-3.223c.095-.666.224-1.357.388-2.057c.165-.7.363-1.374.58-2.013a17.3 17.3 0 0 1 1.296-2.947v-.008q.57-.999 1.192-1.711"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.215 8.628c-.346 1.002.069 2.55 1.08 4.243a16.7 16.7 0 0 0 1.9 2.6c.441.502.925 1.012 1.452 1.504s1.054.95 1.59 1.366a17 17 0 0 0 2.705 1.754c.225.12.45.225.665.32M16.306 7.462c.89.034 1.979.38 3.154.985v.008c.864.44 1.788 1.028 2.704 1.746a22.7 22.7 0 0 1 3.042 2.868a18 18 0 0 1 1.91 2.61c.769 1.313 1.192 2.523 1.192 3.474"></svg:path><svg:ellipse cx="21.199" cy="14.274" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.12" ry="3.719" transform="rotate(-16.656 21.2 14.275)"></svg:ellipse><svg:circle cx="21.199" cy="14.274" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsKhanAcademyViewerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKhangsSirOfficialIcon],svg[arcticons-khangs-sir-official-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M43.912 32.11c-2.57 6.308-13.567 10.227-24.564 8.753c-7.575-1.015-13.49-4.407-15.26-8.752"></svg:path><svg:path d="M45.5 24c0 6.81-9.626 12.332-21.5 12.332S2.5 30.811 2.5 24h0"></svg:path><svg:path d="M43.912 15.89c2.569 6.307-4.263 12.615-15.26 14.089c-10.997 1.473-21.994-2.445-24.564-8.753c-.715-1.755-.715-3.581 0-5.337"></svg:path><svg:path d="M38.975 8.573c4.887 4.743 2.144 10.861-6.126 13.664c-8.27 2.804-18.937 1.23-23.824-3.513c-3.225-3.131-3.225-7.02 0-10.151"></svg:path><svg:path d="M27.372 2.766c6.726 1.068 10.67 5.062 8.807 8.92s-8.824 6.12-15.55 5.052s-10.67-5.062-8.808-8.92c1.184-2.455 4.528-4.373 8.807-5.052"></svg:path><svg:path d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path><svg:path d="M30.539 7.25c0 2.105-2.975 3.811-6.644 3.811s-6.644-1.706-6.644-3.81s2.975-3.812 6.644-3.812s6.644 1.706 6.644 3.811"></svg:path><svg:path d="M24.36 3.44c.138-.605.272-.928.397-.923h0m-1.724 42.966c-.678-.027-.842-9.668-.366-21.532c.194-4.838.465-9.298.763-12.883m4.176-6.98c1.441-.542 2.818-.615 4.047-.14h0M16.137 44.052c-5.072-1.963-5.712-12.531-1.427-23.606c1.5-3.879 3.407-7.306 5.468-10.037m9.685-4.829c4.169.064 7.904 1.544 10.411 4.492h0M7.516 37.928c-5.663-6.66-2.921-18.295 6.125-25.987a28.5 28.5 0 0 1 4.279-3.023m12.62-1.401c9.383 2.878 15.715 10.734 14.697 19.085M2.553 21.398c.87-7.14 6.869-12.637 14.715-14.419m12.139 2.4a30.6 30.6 0 0 1 5.611 5.162c7.692 9.046 8.948 20.614 2.805 25.838M9.967 7.621c2.262-1.923 5.212-2.719 8.421-2.504m8.421 5.558c1.731 3.084 3.319 6.946 4.521 11.245c3.2 11.435 2.464 21.636-1.643 22.785M18.103 3.295c.892-.25 1.87-.051 2.886.529"></svg:path></svg:g>`,
})
export class ArcticonsKhangsSirOfficialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKhatabookIcon],svg[arcticons-khatabook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.04 8.473l-.756 31.862L31.77 43.5l3.982-2.726h3.964V6.736h-3.964L31.77 4.5L9.342 8.465"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.358 8.465h2.778v30.7h-2.778z"></svg:path>`,
})
export class ArcticonsKhatabookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKhlIcon],svg[arcticons-khl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.24 27.87h-9.87L24 19.1l-5.4 8.76H8.76M32.58 5L24 19.1L15.38 5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5h.22a19.8 19.8 0 0 0 5.53-3.12a30.64 30.64 0 0 0 9.49-12.53h0C42.28 20.64 42 8.05 42 7.93v-.41l-.23-.13l-.13-.07C41.4 7.2 36.48 4.5 24 4.5h0C11.52 4.5 6.6 7.2 6.4 7.32l-.13.07l-.27.13v.41c0 .12-.31 12.71 2.73 19.85a30.56 30.56 0 0 0 9.49 12.53a19.8 19.8 0 0 0 5.53 3.12h.22ZM11.78 13.19v8.02m1.03-4.01l2.96-3.98m-2.96 3.98l2.96 4.02m-2.96-4.02h-1.03"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.78 13.2v7.99h3.99m-15.45 8v7.99m5.37-7.99v7.99m-5.37-4.01h5.37"></svg:path>`,
})
export class ArcticonsKhlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKiaIcon],svg[arcticons-kia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.463 28.892l-5.916-5.916M4.5 20.145v8.747l14.446-9.446c.337-.22.732-.338 1.135-.338h2.882c.573 0 1.037.464 1.037 1.037v7.71c0 .573.464 1.037 1.037 1.037h2.882a2.07 2.07 0 0 0 1.135-.338L43.5 19.108v8.747"></svg:path>`,
})
export class ArcticonsKiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKiaAccessIcon],svg[arcticons-kia-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.972 9.588a20.42 20.42 0 0 1 10.48 8.444M26.181 4.5a25.04 25.04 0 0 1 16.38 13.167m-22.428-3.555c-8.115 0-14.694 6.579-14.694 14.694S12.018 43.5 20.133 43.5c.834 0 1.65-.075 2.446-.208v-8.304a6.648 6.648 0 1 1 4.202-6.183v14.629l8.046.066V28.806c0-8.115-6.579-14.694-14.694-14.694"></svg:path>`,
})
export class ArcticonsKiaAccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKiaConnectIcon],svg[arcticons-kia-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.463 23.268l-5.916-5.916M4.5 14.52v8.747l14.446-9.446a2.07 2.07 0 0 1 1.135-.339h2.882c.573 0 1.037.465 1.037 1.038v7.71c0 .573.465 1.037 1.037 1.037h2.882c.403 0 .798-.118 1.135-.338L43.5 13.482v8.748m-2.226 12.287v-6.72m-2.226 0H43.5m-26.997 6.72v-6.72l4.453 6.72v-6.72M8.952 32.263v.028c0 1.23-.996 2.226-2.226 2.226h0A2.226 2.226 0 0 1 4.5 32.291v-2.268c0-1.23.997-2.227 2.226-2.227h0c1.23 0 2.226.997 2.226 2.227v.027m23.018 4.467h-3.36v-6.72h3.36m-3.36 3.36h2.19m-18.117-3.36c1.23 0 2.226.997 2.226 2.226v2.268c0 1.23-.997 2.227-2.226 2.227h0a2.226 2.226 0 0 1-2.227-2.227v-2.268c0-1.23.997-2.226 2.227-2.226m9.876 6.72v-6.72l4.452 6.72v-6.72m10.724 4.466v.028c0 1.23-.996 2.226-2.226 2.226h0a2.226 2.226 0 0 1-2.226-2.226v-2.268c0-1.23.996-2.227 2.226-2.227h0c1.23 0 2.226.997 2.226 2.227v.027"></svg:path>`,
})
export class ArcticonsKiaConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKiaFanIcon],svg[arcticons-kia-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.463 23.226l-5.916-5.916M4.5 14.478v8.747l14.446-9.446c.337-.22.732-.338 1.135-.338h2.882c.573 0 1.037.464 1.037 1.037v7.71c0 .573.465 1.037 1.037 1.037h2.882a2.07 2.07 0 0 0 1.135-.338L43.5 13.441v8.747M28.55 34.559v-6.887l4.563 6.887v-6.887M14.887 34.56v-6.887h3.444m-3.444 3.443h2.238m3.559 3.444l2.281-6.887l2.282 6.886m-.756-2.281H21.44"></svg:path>`,
})
export class ArcticonsKiaFanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKickIcon],svg[arcticons-kick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.75 21.842v-4.25H41V5H28.25v4.25H24v4.25h-4.25V5H7v38h12.75v-8.5H24v4.25h4.25V43H41V30.342h-4.25v-4.25H32.5v-4.25z"></svg:path>`,
})
export class ArcticonsKickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKickbaseIcon],svg[arcticons-kickbase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.267 10.953L4.996 18.35l5.483 3.166c1.41.814 2.315 1.258 2.977 1.719s.668 1.711 0 2.194s-1.706.985-3.116 1.799l-5.346 3.086l4.113 7.123s5.058-2.409 7.01-4.047s3.808-3.273 4.624-5.518s.635-4.982 0-7.134s-1.547-3.546-3.436-5.314s-8.038-4.472-8.038-4.472m10.53 32.421l8.542.127l.094-6.331c.024-1.628-.03-2.635.05-3.437c.081-.803 1.17-1.417 1.917-1.069s1.691 1.01 3.09 1.846l5.298 3.164l4.218-7.06s-4.568-3.245-6.95-4.151c-2.382-.907-4.713-1.732-7.071-1.351c-2.358.38-4.66 1.872-6.23 3.475s-2.344 3.078-2.968 5.59s.01 9.197.01 9.197m22.825-25.541l-4.297-7.384l-5.473 3.185c-1.407.818-2.242 1.383-2.97 1.728c-.73.345-1.818-.27-1.905-1.09s-.006-1.97-.012-3.599l-.02-6.172l-8.225.028s-.425 5.586.027 8.094s.947 4.931 2.49 6.755c1.541 1.825 4.006 3.028 6.19 3.547c2.183.518 3.846.42 6.319-.34c2.473-.761 7.875-4.752 7.875-4.752Z"></svg:path>`,
})
export class ArcticonsKickbaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKickstarterIcon],svg[arcticons-kickstarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.97 24.009l3.547-3.523a9.33 9.33 0 0 0 0-13.24a9.485 9.485 0 0 0-13.33 0l-1.292 1.282a9.435 9.435 0 0 0-17.167 5.33v20.285a9.435 9.435 0 0 0 17.167 5.329l1.291 1.282a9.485 9.485 0 0 0 13.33 0a9.33 9.33 0 0 0 0-13.24z"></svg:path>`,
})
export class ArcticonsKickstarterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKicktippIcon],svg[arcticons-kicktipp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.931 20.272h6.458m-3.23-4.731v17.062c0 1.583 1.378 2.867 3.076 2.867h.923M16.39 27.308l8.753 8.128m-12.298-4.84L23.98 20.264M12.843 12.53v22.94M9.5 5.5h29c2.216 0 4 1.785 4 4v29c0 2.217-1.784 4-4 4h-29a3.99 3.99 0 0 1-4-3.98V9.5c0-2.215 1.784-4 4-4"></svg:path>`,
})
export class ArcticonsKicktippIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKid3Icon],svg[arcticons-kid3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.605 18.128a1.88 1.88 0 0 1 1.84.875a4.6 4.6 0 0 1 .828 1.735c.43 1.704-.068 3.3-1.112 3.563s-2.239-.905-2.668-2.61s.068-3.3 1.112-3.563m-4.667 9.865l25.391-6.932l2.31 8.461L43 34.511l-25.389 6.931z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.83 9.12l-8.034 9.537a7.615 7.615 0 0 0 4.088 12.327l3.874.889m13.636-7.84a15.5 15.5 0 0 0-.454-4.606c-1.36-5.368-5.123-9.067-8.414-8.224s-4.87 5.858-3.51 11.19a15 15 0 0 0 1.887 4.533"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.55 23.206a22.3 22.3 0 0 0-.664-5.111c-1.922-7.43-7.135-12.521-11.683-11.376s-6.726 8.105-4.856 15.526a21.6 21.6 0 0 0 1.983 5.11m6.076 7.739a2.8 2.8 0 0 1 .643-.485a1.52 1.52 0 0 1 1.808.04c.554.554.355 1.652-.445 2.451s-1.897 1-2.45.445s-.355-1.651.444-2.45"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.818 31.825c-1.963-3.46-3.168-4.651-5.294-3.905l2.509 6.968m4.912.256l8.637-2.361m-8.817-17.969q.25-.07.574-.164"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="1.266 2.11" stroke-linecap="round" stroke-linejoin="round" d="M31.377 14.103c2.03-.469 4.384-.712 5.08.71c1.057 2.158-3.681 6.097-2.573 9.006a2.62 2.62 0 0 0 2.52 1.862c.983-.1 1.804-1.142 1.772-3.654a3.44 3.44 0 0 0-1.351-2.59"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.983 18.795a22 22 0 0 0-.5-.33"></svg:path>`,
})
export class ArcticonsKid3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKideappIcon],svg[arcticons-kideapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m16.574 12.06l2.378-3.282l2.4 3.282v11.544l6.817-6.779h3.04v3.149l-8.46 8.413l-3.17.845l-3.018-3z"></svg:path><svg:path d="m19.578 29.232l8.605 9.99h3.256v-3.135l-7.903-8.483"></svg:path></svg:g><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKideappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKidsSpaceIcon],svg[arcticons-kids-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.897 16.18c4.84 2.386 9.68 4.785 15.199 6.153c5.508 1.37 11.673 1.72 12.724 1.238c1.051-.493-3.033-1.829-4.927-4.523c-1.895-2.694-1.6-6.745-2.048-9.439c-.46-2.705-1.665-4.052-3.285-4.106c-1.632-.066-3.68 1.15-4.928 2.869c-1.26 1.719-1.708 3.953-3.701 5.343c-1.993 1.38-5.508 1.917-9.034 2.464ZM6.79 17.406c2.497 2.244 5.005 4.5 10.677 6.57s14.52 3.964 19.306 4.106c4.774.143 5.475-1.478 5.748-.821c.263.657.077 3.592-2.463 4.522c-2.552.92-7.469-.153-10.677 1.643c-3.22 1.785-4.753 6.439-6.986 8.213c-2.234 1.763-5.19.624-6.154-1.654c-.975-2.266.032-5.683-.657-8.245c-.69-2.552-3.078-4.26-5.268-5.727c-2.2-1.468-4.204-2.694-4.752-4.085c-.559-1.401.328-2.956 1.226-4.522"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.739 34.652q-6.57 0-12.188-3.23m17.115-14.838q-6.164.822-12.32-2.869"></svg:path>`,
})
export class ArcticonsKidsSpaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKidzsearchIcon],svg[arcticons-kidzsearch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.594 30.639c1.04 1.354 2.346 1.859 4.16 1.859h2.513a4.233 4.233 0 0 0 4.233-4.233v-.018a4.233 4.233 0 0 0-4.233-4.233h-2.771a4.237 4.237 0 0 1-4.238-4.238h0a4.247 4.247 0 0 1 4.247-4.246h2.499c1.815 0 3.12.504 4.16 1.859M12.5 15.502v16.995m0-5.92l9.135-11.018m0 16.938L14.637 24"></svg:path>`,
})
export class ArcticonsKidzsearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKijijiIcon],svg[arcticons-kijiji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.482 20.09v8.581a2.44 2.44 0 0 1-2.429 2.452h0"></svg:path><svg:circle cx="17.314" cy="17.933" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.482" cy="17.933" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.65" cy="17.933" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.818" cy="17.933" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.986" cy="17.933" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.314 20.09v6.497M27.65 20.09v6.497m5.168-6.497v8.172a2.44 2.44 0 0 1-2.429 2.452h0m7.597-10.624v6.497m-28.722-9.71v9.807m.001-2.084l4.439-4.417m-3.026 3.012l3.49 3.474"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class ArcticonsKijijiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKijijiAutosIcon],svg[arcticons-kijiji-autos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.482 13.201v8.582a2.44 2.44 0 0 1-2.429 2.452"></svg:path><svg:circle cx="17.315" cy="11.044" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.482" cy="11.044" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.65" cy="11.044" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.818" cy="11.044" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.986" cy="11.044" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.315 13.201v6.498m10.335-6.498v6.498m5.168-6.498v8.173c0 1.355-1.087 2.453-2.429 2.453m7.597-10.626v6.498M9.264 9.988v9.808m.001-2.084l4.439-4.418m-3.026 3.012l3.49 3.475m-.43 16.111h-2.836m-.702 2.119l2.12-6.4l2.12 6.4m1.6-6.4v4.28a2.12 2.12 0 1 0 4.24 0v-4.28m1.6 0h4.24m-2.12 6.4v-6.4m5.84 0c1.17 0 2.12.95 2.12 2.12v2.16a2.12 2.12 0 0 1-2.12 2.12h0a2.12 2.12 0 0 1-2.12-2.12v-2.16c0-1.17.95-2.12 2.12-2.12m3.847 5.699c.393.511.885.702 1.57.702h.947c.881 0 1.596-.715 1.596-1.597v-.007c0-.882-.714-1.596-1.596-1.596h-1.046a1.6 1.6 0 0 1-1.598-1.599c0-.884.717-1.601 1.602-1.601h.942c.685 0 1.177.19 1.57.7M8 28.611h32"></svg:path>`,
})
export class ArcticonsKijijiAutosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKijkIcon],svg[arcticons-kijk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 24c6.832-8.079 10.85-11.85 19.5-11.85S36.668 15.92 43.5 24m-39 0c6.832 8.079 10.85 11.85 19.5 11.85S36.668 32.08 43.5 24m-21.544-4.782v9.251"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.968 19.218v9.251a2.313 2.313 0 0 1-2.313 2.313h0M14.5 19.218v9.251m4.972 0l-3.809-4.625l3.809-4.595m-3.809 4.595H14.5m19-4.626v9.251m-4.972 0l3.809-4.625l-3.809-4.595m3.809 4.595H33.5"></svg:path>`,
})
export class ArcticonsKijkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKikIcon],svg[arcticons-kik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.5 7.59h-35a2 2 0 0 0-2 2v22.5a2 2 0 0 0 2 2h3.16v6.32L16 34.09h25.5a2 2 0 0 0 2-2V9.59a2 2 0 0 0-2-2M8.56 12.4v17m.01-3.62l7.69-7.65m-5.25 5.22l6.05 6.02M27.54 12.4v17m0-3.62l7.69-7.65m-5.24 5.22l6.05 6.02M22.3 18.13V29.4"></svg:path><svg:circle cx="39.02" cy="23.97" r="1.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKikaKeyboardIcon],svg[arcticons-kika-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.111 31.912L24 43.5L8.889 31.912a3.14 3.14 0 0 1-1.229-2.49V7.01a2.51 2.51 0 0 1 2.511-2.51h27.658a2.51 2.51 0 0 1 2.51 2.51h0v22.412c0 .976-.453 1.896-1.228 2.49"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 7.751c-7.181 0-13 5.819-13 13s5.819 13 13 13s13-5.818 13-13s-5.818-13-13-13m5.965 12.073l-4.193-2.517a.633.633 0 0 1 0-1.08l4.193-2.515m-11.93 0l4.193 2.516a.63.63 0 0 1 0 1.08l-4.193 2.516m12.916 4.35a6.64 6.64 0 0 1-6.583 5.803h-.736a6.64 6.64 0 0 1-6.583-5.804a.74.74 0 0 1 .732-.83H30.22c.442 0 .787.388.732.83"></svg:path>`,
})
export class ArcticonsKikaKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKilimallIcon],svg[arcticons-kilimall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.842 11.028h24.316c1.25 0 2.211 1.005 2.255 2.253l.95 26.966c.044 1.247-1.006 2.253-2.255 2.253H10.893c-1.25 0-2.3-1.006-2.256-2.253l.95-26.966c.044-1.248 1.006-2.253 2.255-2.253m4.187-.017C17.44 7.657 20.56 5.5 24 5.5c3.445 0 6.568 2.163 7.977 5.525m-11.36 9.477v12.524m0-4.383l6.766-8.142m0 12.525l-5.155-6.262"></svg:path>`,
})
export class ArcticonsKilimallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKillappsIcon],svg[arcticons-killapps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.5 31.5l15-15m-15 0l15 15"></svg:path>`,
})
export class ArcticonsKillappsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKilogIcon],svg[arcticons-kilog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.375 4.5l8 39"></svg:path><svg:circle cx="8.875" cy="25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="8.875" cy="14.75" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.875 25h25m-25-10.25h20"></svg:path>`,
})
export class ArcticonsKilogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKinderundgiftIcon],svg[arcticons-kinderundgift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.24 9.76v3.39c-5.6 1.12-6.58 5.47-6.58 16.61c0 6.21.13 9.61.27 11.48a2.43 2.43 0 0 0 2.43 2.26h15.28a2.43 2.43 0 0 0 2.43-2.26c.14-1.87.27-5.27.27-11.48c0-10.9-.94-15.3-6.21-16.53V9.76Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.12 17.08c-2.79 0-5.17 1-6.05 2.11a6.94 6.94 0 0 0-1 4.19a6.7 6.7 0 0 0 .27 2.07s-1.22 0-1.22 1.87c0 1.33 1.63 1.29 1.63 1.29l1.5.08s-.14 1.69.64 1.69a5 5 0 0 0 1.21-.12a1.42 1.42 0 0 0 1 .62a1.52 1.52 0 0 0 1.07-.58a1.32 1.32 0 0 0 1.07.68a1 1 0 0 0 .92-.7a2.2 2.2 0 0 0 1 .26c.59 0 .9-.28.9-1.65c0 0 3 .23 3-1.76c0-1.7-1.14-1.61-1.14-1.61v-3.4a8.3 8.3 0 0 0-.74-2.86c-.25-1.19-.72-2.18-4.06-2.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.53 21.55A1.47 1.47 0 0 1 23.19 23a2.44 2.44 0 0 1-2.26 2.18c-1 0-1.26-.63-1.26-1.73a1.81 1.81 0 0 1 1.86-1.9m3.35 1.62a2 2 0 0 0 1.82 2.17a1.57 1.57 0 0 0 1.56-1.62a2.18 2.18 0 0 0-2.06-2.31c-1.14 0-1.32.85-1.32 1.76m-1.13 2.45a4.3 4.3 0 0 1 1.71 2.16a.68.68 0 0 1-.68.72c-.27 0-1-.72-1-.72s-.31.49-.67.49s-.4-.42-.4-.57a3.9 3.9 0 0 1 1.04-2.08M18.63 37.9l11.22-4.19M31 31.75c-1 .43-1.35 1.62-1.14 2a2.09 2.09 0 0 0 2.15.8m-14.43 5.36c1-.47 1.28-1.68 1.05-2a2.1 2.1 0 0 0-2.18-.7m2.18-3.45l11.22 4.19M31 39.91a1.81 1.81 0 0 1-1.14-2a2.09 2.09 0 0 1 2.15-.8m-14.43-5.36c1 .47 1.28 1.68 1.05 2a2.1 2.1 0 0 1-2.18.7M29.12 5.66h-9.91l-3.83 1.29m8.78 2.81v-4.1"></svg:path>`,
})
export class ArcticonsKinderundgiftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKindleIcon],svg[arcticons-kindle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.944 37.03a56.3 56.3 0 0 1 9.696-.751c4.318 0 11.836 1.626 20.316 4.879"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.167 36.547c1.52-.212 3.833-2.679 3.833-2.679a15 15 0 0 0 2.237-1.57l2.179 2.124v1.24l1.29.885l3.589-2.96s-.379-1.293-1.262-1.64c-.042-.62-2.748-5.06-3-5.425m-6.589.533a15 15 0 0 0 2.44 1.542c.392.028 6.532-4.093 6.532-4.093a4.73 4.73 0 0 0 2.13-1.122a2.7 2.7 0 0 0 .225-1.15s.365-.476.365-.645s.28-1.01.28-1.093"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.855 24.504s.701.869.925.869s5.103-2.58 5.215-3.14m-10.828 6.532c.09-.084 2.644-1.444 2.644-1.444"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.154 21.868c.477 1.907 3.673 5.453 3.673 5.453l3.365-3.294s-2.832-3.028-3.169-3.953s-.785-2.524-1.682-2.916s-4.458-2.243-4.458-2.243l-.673 1.233a11.73 11.73 0 0 0-5.13 9.673c0 6.561.756 8.804.756 8.804s4.85-1.037 6.589-2.888s2.742-2.972 2.742-2.972l.353-3.004"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.597 34.44a3.44 3.44 0 0 0 1.423 1.93m19.701-2.31a15.5 15.5 0 0 0 3.391 4.532a17 17 0 0 0 2.25 1.304M30.03 36.28c.573.756 2.396 2.817 2.956 3.448M20.167 17.079l.454-.426s2.047 1.402 2.664 1.01s.589-.842.589-.842s1.01-.617.981-.925a1.7 1.7 0 0 1 0-.449h.841s-.532-1.598-.196-2.186l.336-.59l.401.365a2.6 2.6 0 0 0 1.03-2.58c-.393-1.57-2.776-4.037-3.87-4.205s-.953.196-.953.196s-1.99-1.177-3.224-.084s-2.692 2.356-2.663 4.599s.056 2.887.224 3.112a2.6 2.6 0 0 0 .766.481l-.494.964m17.924.738l3.028.2l-5.284 5.663l-2.511-.308z"></svg:path>`,
})
export class ArcticonsKindleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKinemasterIcon],svg[arcticons-kinemaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.374 13.533v20.934m11.252 0L20.991 24l8.635-10.467M20.991 24h-2.617"></svg:path><svg:circle cx="24" cy="6" r=".75" fill="currentColor"></svg:circle><svg:circle cx="41.119" cy="18.438" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.58" cy="38.562" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.42" cy="38.562" r=".75" fill="currentColor"></svg:circle><svg:circle cx="6.881" cy="18.438" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="6" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsKinemasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKinestopIcon],svg[arcticons-kinestop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.19 36.206v3.83a.62.62 0 0 1-.623.623H8.81a.62.62 0 0 1-.623-.623v-3.83m31.626 0v3.83a.62.62 0 0 1-.622.623h-3.758a.62.62 0 0 1-.623-.623v-3.83"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M41.796 33.128v-5.959c0-1.778-2.348-3.69-3.811-4.122l-1.29-12.228C36.54 9.336 35.05 7.34 33.107 7.34H14.893c-1.943 0-3.432 1.995-3.588 3.478l-1.29 12.228c-1.463.431-3.811 2.344-3.811 4.122v5.959"></svg:path><svg:path d="M7.99 32.58h32.02c1.38 0 2.49.809 2.49 1.813s-1.11 1.814-2.49 1.814H7.99c-1.38 0-2.49-.809-2.49-1.814s1.11-1.813 2.49-1.813m5.834-4.126a2.083 2.083 0 1 1-2.083-2.084h0c1.15 0 2.083.933 2.083 2.084m24.518 0a2.083 2.083 0 1 1-2.083-2.084h0c1.15 0 2.083.933 2.083 2.084m-20.696-.149s1.65 2.282 6.354 2.282s6.354-2.282 6.354-2.282m5.433-6.234l-1.255-10.483c-.134-1.116-.597-1.483-1.547-1.483h-17.97c-.95 0-1.413.367-1.547 1.483L12.213 22.07zM20.222 10.104l7.085 11.966"></svg:path></svg:g>`,
})
export class ArcticonsKinestopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKingdomRushIcon],svg[arcticons-kingdom-rush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.876 23.465c1.349.339 4.47-.117 2.846-4.232c.064-7.624 5.082-13.647 11.368-13.642c10.742-.687 13.127 17.68 10.338 18.61c-2.281.76-2.64 1.632-2.49 6.04c.139 4.086.046 4.49-1.536 6.675c-2.36 3.256-6.291 5.145-11.295 5.426c-2.16.121-4.174.113-4.478-.019h0c-.303-.131-1.591-.506-2.861-.832c-2.606-.669-5.088-2.27-5.52-3.921m6.881-16.825c.364-.439 4.25-2.66 5.821-2.982c4.882-.999 13.243 2.922 15.657 5.83m-23.245 5.903L14.231 12.43l-4.078-2.336L5.5 15.03l5.567 17.622m5.266 3.307c3.358-1.647 5.293-1.455 5.24-3.909c.004-.75-1.258-2.64-1.846-2.64c-1.04 0-9.62 4.215-9.62 4.215s1.485 4.011 1.905 4.011c1.249 0 .63.133 4.32-1.677m16.836-6.897c-3.807 4.438-6.201 5.102-11.664 3.77m1.132.388l-1.552 8.863M23.69 23.11c.88 7.24 9.524 6.702 14.967 4.86m-10.048-4.958s2.312-.837 4.242.47c1.559 1.11 3.276.754 3.671.822m.18-1.119c-.312-.955-2.327-1.94-4.966-2.426c-1.74-.32-2.962-1.016-3.918.448c-3.07 4.705-1.864 5.432 2.535 3.933c1.67-.569 3.345.89 3.536 1.08s.82.347 1.4.347c.704 0 1.543-1.534 1.42-2.18zm-16.067-2.533c.457.457 2.052 3.18 3.249 2.21c1.605-.976 1.153-3.195 1.649-4.842m-3.258-.1C18.637 19.728 26.9 3.787 33.938 7.974c.898.746-.303 4.662 4.537 4.232l1.976 7.767c-2.224-3.411-15.48-4.9-18.177-2.055"></svg:path>`,
})
export class ArcticonsKingdomRushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKinkdIcon],svg[arcticons-kinkd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.567 19.97v8.541m.001-1.815l3.866-3.847m-2.636 2.623l3.04 3.026"></svg:path><svg:circle cx="17.143" cy="20.237" r=".747" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.143 22.852v5.659m6.397-.001v-3.523a2.135 2.135 0 0 0-2.135-2.135h0c-1.18 0-2.135.956-2.135 2.135m0 3.524v-5.659m12.572 5.658v-8.54h1.921a3.737 3.737 0 0 1 3.737 3.736v1.068a3.737 3.737 0 0 1-3.737 3.737zM10.5 19.97v8.541m0-2.975l4.591-5.538m0 8.513l-3.517-4.271"></svg:path>`,
})
export class ArcticonsKinkdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsKinnuIcon],svg[arcticons-kinnu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.84 13.915c6.782-4.967 18.55-11.39 21.647-6.892c2.805 4.074-6.868 10.35-12.15 16.03c-5.074 5.454-13.903 16.105-17.486 13.886c-4.186-2.593 1.47-18.25 7.99-23.024"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.698 11.133c-3.81 2.889-1.104 14.074 7.556 22.462c10.18 9.861 20.425 9.886 21.978 7.81c2.913-3.894-5.993-10.757-11.895-16.667C22.096 19.49 12.77 8.802 9.697 11.133"></svg:path>`,
})
export class ArcticonsKinnuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
